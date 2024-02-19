import GridImage from "@/assets/grid.png";

const AboutPage = () => {
  return (
    <div>
      <section className=" h-[50vh] md:h-[100vh] relative">
        {/* <div className="bg-black/50 absolute inset-0 grid place-items-center p-3">
                        <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl text-white text-center">
                            Anindya Mukherjee
                        </h1>
                    </div> */}
        {/* <img
                        src="/images/hero.jpg"
                        className="object-cover h-full w-full"
                        alt=""
                    /> */}
        <video autoPlay muted playsInline controls className="object-cover h-full w-full" src="/assets/videos/intro.mp4"></video>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h3 className="text-center mb-10 md:mb-16 heading-1">About</h3>
        <div className="grid lg:grid-cols-[450px,auto] gap-10">
          <div className="row-start-2 lg:row-start-1 my-auto">
            <img className="w-[300px] lg:w-full mx-auto" src="/assets/images/grid.png" alt="" />
          </div>
          <div className="flex-1 text-slate-600 leading-loose text-justify  mx-auto font-content">
            <p>
              Welcome to my world of artistry! I'm Anindya Mukherjee, a passionate artist hailing from the picturesque landscapes of India. My art revolves around the profound cycles of life and death, delving into the intricate relationship between humanity and nature.
              <br />
              <br />
              My journey into the realm of art began amidst the serene surroundings of Kurseong hill station, where I spent my childhood . Surrounded by nature's boundless beauty, I found my muse and embarked on a creative exploration that continues to shape my existence. Despite facing economic
              hurdles and initial rejections from art colleges, my determination fueled my pursuit of artistic expression. Battling periods of depression and frustration, I found solace and inspiration in the ever-evolving canvas of nature. Tragically, the loss of my mother served as a poignant
              reminder of life's transient nature, igniting a profound introspection into the essence of existence.
              <br />
              <br />
              In my artistic endeavors, I predominantly employ charcoal, oil paint, and pen to capture the raw emotions and intricate details of my subjects. Charcoal, with its monochromatic allure, holds a special place in my heart, allowing me to convey depth and emotion in my creations.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section className="container mx-auto px-4 py-16">
          <h3 className="text-center mb-10 md:mb-16 heading-1">Story Behind</h3>
          <div className="">
            <div className="flex-1 text-slate-600 leading-loose text-justify font-content max-w-[75ch] mx-auto">
              <p>
                In my childhood, I was captivated by the wonders of nature. Every tree, every cloud seemed like a piece of a grand puzzle, and I felt intimately connected to it all. Standing amidst the whispering woods, I'd lose myself in contemplation, feeling as though there was no distinction
                between myself and the natural world around me. This profound sense of unity inspired my passion for landscape painting, as I sought to share the feeling of belonging with others.
                <br />
                <br />
                However, life's journey took a somber turn with the sudden loss of my beloved mother. The pain of her absence brought me face to face with the harsh reality of death. It was a heartbreaking realization that shook me to my core. As I grappled with grief, I couldn't escape the
                inevitable truth that one day, I too would become nothing more than dust and bones.
                <br />
                <br />
                et, amidst the darkness, a flicker of understanding emerged. I realized that the essence of life lies not in its duration, but in the impact we leave on the world around us. This realization became the driving force behind my art. I turned to my canvas as a means of grappling with
                the complexities of human existence, intertwining themes of nature, humanity, and mortality.
                <br />
                <br />
                Through my paintings, I aim to provoke introspection and awaken an awareness of our interconnectedness with the natural world. Each brushstroke is infused with the urgency of this realization, urging viewers to contemplate their place in the grand tapestry of existence. For me, art
                is not just a means of expression but a tool for fostering a deeper connection to the world and a greater appreciation for the beauty and fragility of life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
