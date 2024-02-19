"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AnimationHandler, AnimationHandlerResponse } from "react-responsive-carousel/lib/ts/components/Carousel/types";

const Hero = () => {
  const fadeAnimationHandler: AnimationHandler = (props, state): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    let slideStyle: React.CSSProperties = {
      position: "absolute",
      display: "block",
      zIndex: 0,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      scale: 1,
      bottom: 0,
      transition: "all",

      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        scale: 1.5,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        scale: 1.5,
        position: "relative",
      },
      prevStyle: { ...slideStyle },
    };
  };
  return (
    <Carousel centerMode={false} showThumbs={false} autoPlay transitionTime={1300} className=" h-[50vh] md:h-[100vh] relative " animationHandler={fadeAnimationHandler}>
      <img src="/assets/images/hero.jpg" className="object-cover h-[50vh] md:h-[100vh] w-full" alt="" />
      <img src="/assets/images/artist.jpg" className="object-cover h-[50vh] md:h-[100vh] w-full" alt="" />
      <img src="/assets/images/artist2.jpeg" className="object-cover h-[50vh] md:h-[100vh] w-full" alt="" />
    </Carousel>
  );
};

export default Hero;
