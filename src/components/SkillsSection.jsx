import React from "react";
import { assets } from "../assets/assets";

const SkillsSection = () => {
  const frontendSkills = [
    { topic: "Reactjs", level: "Experienced" },
    { topic: "Nodejs", level: "Experienced" },
    { topic: "Expressjs", level: "Experienced" },
    { topic: "JavaScript", level: "Intermediate" },
    { topic: "HTML/CSS", level: "Intermediate" },
    { topic: "Tailwind CSS", level: "Intermediate" },
    { topic: "Python", level: "Basic" },
    { topic: "Flask", level: "Basic" },
    { topic: "Django", level: "Basic" },
    { topic: "Java", level: "Basic" },
    { topic: "MySQL", level: "Basic" },
    { topic: "MongoDB", level: "Basic" },
  ];

  const backendSkills = [
    { topic: "Git", level: "Intermediate" },
    { topic: "GitHub", level: "Intermediate" },
    { topic: "VS Code", level: "Intermediate" },
    { topic: "PyCharm", level: "Intermediate" },
    { topic: "DSA", level: "Intermediate" },
    { topic: "OOPS", level: "Intermediate" },
    { topic: "Postman", level: "Basic" },
    { topic: "RestAPI", level: "Intermediate" },
    { topic: "SQLAlchemy", level: "Intermediate" },
    { topic: "Parcel", level: "Intermediate" },
    { topic: "Axios", level: "Intermediate" },
    { topic: "Axios", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="relative text-center ">
      <p className="text-accent-gray">Explore My</p>
      <h1 className="text-5xl font-bold mb-12 text-primary-yellow">Skills</h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Frontend container */}
        <div className="bg-white border-[0.1rem] border-border-gray rounded-4xl p-10  w-full mx-4 sm:w-[90%] md:w-[45%]">
          <h2 className="text-2xl font-semibold mb-10 text-accent-gray">
            Tech Stacks
          </h2>
          <div className="grid grid-cols-2 gap-y-8  text-left">
            {frontendSkills.map((item, index) => (
              <article key={index} className="flex items-center gap-3">
                <img
                  src={assets.checkmark}
                  alt="checkmark_icon"
                  className="h-8 w-8 "
                />
                <div>
                  <h3 className="font-semibold">{item.topic}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend container */}
        <div className="bg-white border-[0.1rem] border-border-gray rounded-4xl p-10  w-full mx-4 sm:w-[90%] md:w-[45%]">
          <h2 className="text-2xl font-semibold mb-10 text-accent-gray">
            Backend Development
          </h2>
          <div className="grid grid-cols-2 gap-y-8 text-left ">
            {backendSkills.map((item, index) => (
              <article key={index} className="flex items-center gap-3">
                <img
                  src={assets.checkmark}
                  alt="checkmark_icon"
                  className="h-8 w-8"
                />
                <div>
                  <h3 className="font-semibold">{item.topic}</h3>
                  {/* <p className="text-accent-gray text-sm">{item.level}</p> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <a href="#project">
        <img
          className="h-8 absolute right-[-5rem] bottom-[2.5rem] lg:flex md:flex sm:none"
          src={assets.arrow_icon}
          alt="arrow_icon"
        />
      </a>
    </section>
  );
};

export default SkillsSection;
