import Link from "next/link";
import { Painting } from "@/utils";
type PaintArray = {
  [key: number]: Painting[];
};

const PaintingAutoGrid = ({ paintings }: { paintings: Painting[] }) => {
  const splitList = (oa: Painting[]) => {
    let res: PaintArray = {
      1: [],
      2: [],
      3: [],
      4: [],
    };

    let i = 1;

    oa.forEach((e) => {
      res[i].push(e);
      i = i + 1;
      if (i > 4) {
        i = 1;
      }
    });

    return res;
  };

  const paintGrid = splitList(paintings);

  return (
    <section className="container mx-auto px-4 py-16">
      <h3 className="text-center  mb-4 heading-1">My Paintings</h3>
      <p className="mx-auto text-center max-w-[500px] description">Step into the world of my artistry and explore the intricate tapestry of emotions and reflections woven into each piece. Connect with me to embark on a journey of introspection and discovery through the lens of art.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 lg:mt-20 max-w-[80ch] mx-auto">
        {[1, 2, 3, 4].map((k) => {
          return (
            <div key={k} className="flex flex-col gap-4">
              {paintGrid[k].map((painting, i) => {
                return (
                  <Link href={"paintings/" + painting.slug} className="cursor-pointer shadow" key={i}>
                    <img src={painting.painting} alt=" " className="rounded w-full  object-cover hover:shadow-xl hover:scale-[1.03] transition-all" />
                    {/* <p className="text-center mt-2 w-[80%] description mx-auto">
                                            {painting.title}
                                        </p>
                                        <p className="mt-2 mb-1 text-center description">
                                            Rs. {painting.price}
                                        </p> */}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={"/paintings"} className="bg-transparent border border-app-primary z-10 relative text-app-primary mt-16 px-8 py-3  active:scale-95 rounded-full">
          View More
        </Link>
      </div>
    </section>
  );
};

export default PaintingAutoGrid;
