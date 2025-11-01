import React from 'react'
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-[70vh] text-center flex flex-col justify-center items-center"
    >
      <p className="text-accent-gray">Get in Touch</p>
      <h1 className="text-5xl font-bold mb-12 text-primary-yellow">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row  justify-center items-center gap-4 rounded-4xl border-[0.1rem] p-4 md:p-8 border-border-gray my-8 mx-auto  max-w-[500px]">
        {/* Email */}
        <div className="flex items-center gap-2">
          <img className="h-8" src={assets.email} alt="email_icon" />
          <p>
            <a
              className="navbar-section-hover text-wrap"
              href="mailto:premkm532@gmail.com"
            >
              premkm532@gmail.com
            </a>
          </p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-2">
          <img className="h-8" src={assets.linkedin_icon} alt="linkedin_icon" />
          <p>
            <a
              className="navbar-section-hover"
              href="https://www.linkedin.com/in/premasagar-k"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection