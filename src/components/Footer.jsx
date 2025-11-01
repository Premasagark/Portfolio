import React from "react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#hero-section" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <footer className="h-[26vh] my-0 mx-4">
      <nav className="flex flex-wrap justify-center content-center nav-links gap-[2rem] text-[1.5rem] my-4">
        {navLinks.map((link, index) => (
          <a key={index} className="navbar-section-hover" href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
      <p className="text-center">
        Copyright &#169; 2023 Premasagar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
