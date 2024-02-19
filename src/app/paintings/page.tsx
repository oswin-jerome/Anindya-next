import Link from "next/link";
import { DESC, Painting } from "@/utils";
import Head from "next/head";
import { Metadata } from "next";

async function getData() {
  const res = await fetch(process.env.API_URL + "/paintings", {
    next: {
      tags: ["paintings"],
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Paintings - Anindya Mukherjee",
  description: "Step into the world of my artistry and explore the intricate tapestry of emotions and reflections woven into each piece. Connect with me to embark on a journey of introspection and discovery through the lens of art.",
};

const PaintingsPage = async () => {
  const paintings: Painting[] = await getData();
  return (
    <>
      <div className="mt-24 container max-w-[80ch] mx-auto px-4 py-16">
        <h3 className="text-center mb-4 heading-1">My Paintings</h3>
        <p className="mx-auto text-center max-w-[500px] description">Step into the world of my artistry and explore the intricate tapestry of emotions and reflections woven into each piece. Connect with me to embark on a journey of introspection and discovery through the lens of art.</p>

        <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 ">
          {paintings.map((painting, i) => {
            return (
              <Link href={"/paintings/" + painting.slug} className="cursor-pointer" key={i}>
                <img src={painting.painting} alt=" " className="rounded w-full aspect-[3/4] object-cover hover:shadow-xl hover:scale-[1.03] transition-all" />
                <p className="text-center mt-2 w-[80%] description mx-auto">{painting.title}</p>
                <p className="mt-2 text-center description">Rs. {painting.price}</p>
              </Link>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default PaintingsPage;
