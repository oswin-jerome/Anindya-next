import { Painting } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";

async function getData(slug: string) {
  console.log(slug);
  const res = await fetch(process.env.API_URL + "/paintings/" + slug, {
    next: {
      tags: ["paintings"],
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(res.status);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return {
    painting: data.painting,
    child_paintings: data.child_paintings,
  };
}

const PaintingDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { painting, child_paintings } = await getData(params.slug);

  const app_url = "https://anindyamukherjee.in/paintings/";

  return (
    <div className="mt-24 container mx-auto px-4 py-16 ">
      <section className="grid lg:grid-cols-[3fr,3fr] gap-16">
        <div>
          <img className="w-full h-full" src={painting.painting} alt="" />
        </div>
        <div>
          <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4">
            <h1 className="text-4xl font-bold text-app-primary">{painting.title}</h1>
            <div className="w-full md:w-1 bg-app-primary h-1 md:h-full"></div>
            <div className="description">
              <p>Medium: {painting.medium}</p>
              <p>Size: {painting.size}</p>
              <p>Price: Rs. {painting.price}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="description leading-loose text-justify prose max-w-full">
              <div
                dangerouslySetInnerHTML={{
                  __html: painting.description,
                }}
              ></div>
            </div>
            <div className="mt-8 mb-8">
              <a href={`https://wa.me/+919800501350?text=I'm interested to buy this painting "${painting.title}"\n ${app_url + painting.slug}`} className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full">
                Buy Painting
              </a>
            </div>

            {child_paintings.length > 0 && <h4 className="text-xl font-bold">Related Paintings</h4>}
            {child_paintings.length > 0 && <div className="gap-4 mt-4 relative ">{/*  */}</div>}
          </div>
        </div>
      </section>
      <section className="mt-20 description leading-loose text-justify prose max-w-full">
        <div
          dangerouslySetInnerHTML={{
            __html: painting.post,
          }}
        ></div>
      </section>
    </div>
  );
};

export default PaintingDetailsPage;

export async function generateStaticParams() {
  const posts: Painting[] = await fetch(process.env.API_URL + "/paintings", {
    next: {
      tags: ["paintings"],
    },
  }).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const product = await fetch(process.env.API_URL + "/paintings/" + id).then((res) => res.json());
  const paint: Painting = product.painting;
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: paint.title,
    openGraph: {
      images: [paint.painting, ...previousImages],
    },
  };
}
