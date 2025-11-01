import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  const toggleMenu = () => setShowBurger((prev) => !prev);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav className="h-[17vh] w-full left-0 top-0 flex z-20 items-center">
      {/* desktop Logo  */}
      <div className="flex h-[inherit] justify-around w-[100%] items-center">
        <div className="text-4xl">Premasagar K</div>

        {/* desktop menu  */}
        <div className="hidden md:flex ">
          <ul className="nav-links  flex gap-[2rem] text-[1.5rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className="navbar-section-hover" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            {showBurger ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {showBurger && (
          <div className="md:hidden flex flex-col z-10  absolute top-[17vh] left-0 w-full bg-white/50 border-t border-gray-200 shadow-inner">
            <ul className="nav-links  flex flex-col text-center py-4 space-y-4 text-lg font-medium">
              {navLinks.map((link, index) => (
                <li className="" key={index}>
                  <a className="navbar-section-hover" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
