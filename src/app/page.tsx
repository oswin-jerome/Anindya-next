import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { DESC, Painting } from "@/utils";

import PaintingAutoGrid from "@/components/PaintingAutoGrid";
import Head from "next/head";

async function getData() {
  const res = await fetch(process.env.API_URL + "/featured", {
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

export default async function Home() {
  const paintings: Painting[] = await getData();

  return (
    <div>
      <section className=" h-[50vh] md:h-[100vh] relative mt-16 md:mt-auto">
        <Hero />
        <div className="bg-black/50 0 absolute inset-0 grid place-items-center p-3">
          <h1 className="text-3xl md:text-[4em] xl:text-[5em] text-white/90 text-center name capitalize tracking-widest">ANINDYA MUKHERJEE</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-center mb-8 md:mb-10 heading-1">About</h3>
        <div className="">
          <div className="flex-1 text-slate-600 max-w-[80ch] leading-loose text-justify  mx-auto font-content">
            <p>
              Welcome to my world of artistry! I'm Anindya Mukherjee, a passionate artist hailing from the picturesque landscapes of India. My art revolves around the profound cycles of life and death, delving into the intricate relationship between humanity and nature.
              <br />
              <br />
              My journey into the realm of art began amidst the serene surroundings of Kurseong hill station, where I spent my childhood . Surrounded by nature's boundless beauty, I found my muse and embarked on a creative exploration that continues to shape my existence. Despite facing economic
              hurdles and initial rejections from art colleges, my determination fueled my pursuit of artistic expression. Battling periods of depression and frustration, I found solace and inspiration in the ever-evolving canvas of nature. Tragically, the loss of my mother served as a poignant
              reminder of life's transient nature, igniting a profound introspection into the essence of existence.
            </p>
            <div className="flex justify-center">
              <Link href={"/about"} className="bg-transparent border border-app-primary z-10 relative text-app-primary mt-16 px-8 py-3  active:scale-95 rounded-full">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">{<PaintingAutoGrid paintings={paintings} />}</div>
    </div>
  );
}
