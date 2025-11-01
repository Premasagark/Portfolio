import React from "react";
import { assets } from "../assets/assets.js";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className=" flex flex-wrap relative justify-center items-center gap-[5rem] h-[80vh]"
    >
      <div className="hero-pic content-center lg:w-[400px] lg:h-[400px] min-w-[200px] min-h-[200px] sm:h-[200px] sm:w-[200px] md:w-[400px] md:h-[400px] my-auto mx-0">
        <img src={assets.hero} alt="" />
      </div>

      <div className="hero-content text-center self-center font-semibold">
        <p className="text-accent-gray">Hello, I'm</p>
        <h1 className="title text-[3rem] text-primary-yellow">Premasagar</h1>
        <p className="text-accent-gray text-[1.75rem] mb-4">
          Full Stack Web Developer
        </p>

        <div className="here-section-btns flex justify-center gap-4">
          <a
            href={assets.resume}
            target="_blank"
            // download="Premasagar_Resume.pdf"
            className="btn-style hover:border-primary-yellow cursor-pointer hover:bg-primary-yellow hover:text-black"
          >
            Download CV
          </a>

          <button className="btn-style hover:bg-black cursor-pointer hover:text-primary-yellow">
            Contact Info
          </button>
        </div>

        <div className="hero-contact-icon flex justify-center mt-4 gap-4">
          <img
            className="h-8 cursor-pointer"
            src={assets.linkedin}
            alt="linkedin_icon"
          />
          <img
            className="h-8 cursor-pointer"
            src={assets.github}
            alt="linkedin"
          />
        </div>
      </div>

      <a href="#about">
        <img
          className="h-8 absolute right-[-5rem] bottom-[2.5rem] lg:flex md:flex sm:none"
          src={assets.arrow_icon}
          alt="arrow_icon"
        />
      </a>
    </section>
  );
};

export default HeroSection;
