import { assets } from "../assets/assets";

const ProjectsSection = () => {
  const projects = [
    {
      image: assets.imagine,
      name: "Imagine",
      link: "https://premasagark.github.io/ImagineClient/",
    },
    {
      image: assets.neoHire,
      name: "NeoHire",
      link: "https://github.com/Premasagark/NLP_driven_resume_ranking_system",
    },
    {
      image: assets.gemini_clone,
      name: "Gemini Clone",
      link: "https://github.com/Premasagark/Gemini-Clone",
    },
    {
      image: assets.hotel_booking,
      name: "BookMyRoom",
      link: "https://log-hotel.onrender.com/",
    },
    {
      image: assets.project3_img,
      name: "Swiggy Clone",
      link: "",
    },
  ];
  return (
    <section id="project" className="relative text-center ">
      <p className="text-accent-gray">Browse My Recent</p>
      <h1 className="text-5xl font-bold mb-12 text-primary-yellow">Projects</h1>

      <div className="horizontal-wraper gap-8 flex lg:flex-row sm:flex-col">
        <ul className="flex flex-row gap-8 overflow-x-scroll py-8 px-4">
          {projects.map((item, index) => (
            <li
              key={index}
              className="details-container flex flex-col items-center min-w-[350px] min-h-[480px]
                 bg-white rounded-4xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                 hover:shadow-lg
                 hover:scale-103 transition-all duration-300 ease-in-out"
            >
              <div>
                <img
                  className="rounded-4xl w-full h-auto object-cover"
                  src={item.image}
                  alt="project_img"
                />
              </div>

              <h2 className="m-4 text-black text-2xl font-bold">{item.name}</h2>
              <a
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
                className="btn-style cursor-pointer hover:bg-black hover:text-primary-yellow transition-all duration-300 ease-in-out"
              >
                Click here
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a href="#contact">
        <img
          className="h-8 absolute right-[-5rem] bottom-[2.5rem] lg:flex md:flex sm:none"
          src={assets.arrow_icon}
          alt="arrow_icon"
        />
      </a>
    </section>
  );
};

export default ProjectsSection;
