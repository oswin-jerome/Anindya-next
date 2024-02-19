"use client";

import { Painting } from "@/utils";
import Link from "next/link";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";
import Modal from "react-modal";

const CarImages = ({ child_paintings }: { child_paintings: Painting[] }) => {
  return (
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={child_paintings.length} visibleSlides={3} infinite className="outline-0">
      <Slider>
        {child_paintings.map((paint, i) => {
          return (
            <Slide index={i} key={i} className="">
              <PaintItem paint={paint} />
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className=" hidden md:block absolute md:-left-10 top-[50%] -translate-y-[50%] text-black/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </ButtonBack>
      <ButtonNext className=" hidden md:block absolute  md:-right-10 top-[50%] -translate-y-[50%] text-black/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </ButtonNext>
    </CarouselProvider>
  );
};

export default CarImages;

function PaintItem({ paint }: { paint: Painting }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",

      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="p-2 cursor-pointer ">
      <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setIsOpen(false)} contentLabel="Example Modal" shouldCloseOnOverlayClick={true} overlayClassName="Overlay">
        <div className="max-h-[90vh] max-w-[90vw] lg:max-w-[70vw] overflow-scroll pb-16">
          <div className="flex justify-end pb-2">
            <button onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <img src={paint.painting} alt="" />
            <div>
              <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4">
                <h1 className="text-4xl font-bold text-app-primary">{paint.title}</h1>
                <div className="w-full md:w-1 bg-app-primary h-1 md:h-full"></div>
                <div className="description">
                  <p>Medium: {paint.medium}</p>
                  <p>Size: {paint.size}</p>
                  <p>Price: Rs. {paint.price}</p>
                </div>
              </div>
              <p className="description mt-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: paint.description,
                  }}
                ></div>
              </p>
              <div className="mt-10">
                <Link href={"/paintings/" + paint.slug} className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <img onClick={() => setIsOpen(true)} src={paint.painting} alt="" className="aspect-square " />
    </div>
  );
}
