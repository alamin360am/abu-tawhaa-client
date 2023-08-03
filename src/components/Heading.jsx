import React from "react";
import HeadingImg from "./../../public/header-mandala.png";

const Heading = ({heading}) => {
  return (
    <section className="text-center mb-8">
      <div className="flex justify-center items-center">
        <img src={HeadingImg} alt="" className="h-20 rotate-180" />
        <h2 className="text-xl md:text-3xl font-bold">{heading}</h2>
        <img src={HeadingImg} alt="" className="h-20" />
      </div>
    </section>
  );
};

export default Heading;
