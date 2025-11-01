import React from "react";
import { assets } from "../assets/assets";

const AboutSection = () => {
  return (
    <section id="about" className="relative text-center ">
      <p className="text-accent-gray w-full text-center">Get To Know More</p>
      <h1 className="title text-5xl text-primary-yellow  sm:mb-12 font-bold w-full text-center">
        About Me
      </h1>

      <div className=" flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        {/* image */}
        <div className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
          <img
            className="rounded-4xl w-full h-full object-contain"
            src={assets.web_development}
            alt="about"
          />
        </div>

        {/* content */}
        <div className="flex flex-col justify-center text-justify md:max-w-[550px]">
          <div className="flex flex-col sm:flex-row gap-6 my-6 justify-center">
            <div className="details-box">
              <img
                className="h-8 w-8 mx-auto"
                src={assets.experience}
                alt="exp"
              />
              <h3 className="font-bold">Want To Be A</h3>
              <p className="text-accent-gray">Full Stack web Developer</p>
            </div>
            <div className="details-box">
              <img
                className="h-8 w-8 mx-auto"
                src={assets.education}
                alt="edu"
              />
              <h3 className="font-bold">Education</h3>
              <p className="text-accent-gray">BE CSE 2021–2025</p>
            </div>
          </div>
          <p className="leading-relaxed text-accent-gray text-sm sm:text-base">
            I’m a Computer Science and Engineering graduate with a strong
            interest in full stack development. I specialize in building
            responsive and scalable web applications using the MERN stack and
            Python frameworks. My focus lies in creating clean APIs, seamless
            user interfaces, and efficient backend systems while constantly
            learning new tools to enhance my workflow.
          </p>
        </div>
      </div>
      <a href="#skills">
        <img
          className="h-8 absolute right-[-5rem] bottom-[2.5rem] lg:flex md:flex sm:none"
          src={assets.arrow_icon}
          alt="arrow_icon"
        />
      </a>
    </section>
  );
};

export default AboutSection;
