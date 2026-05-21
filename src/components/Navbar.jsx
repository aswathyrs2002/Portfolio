import React, { useState } from "react";

function Navbar() {

  const [activeSection, setActiveSection] = useState("#about");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-[92%] mx-auto mt-5 px-10 py-5 bg-white/10 text-black rounded-2xl flex justify-between items-center backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] sticky top-3 z-100">
        

        <ul className="flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative py-1">
              <a
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className="hover:text-[#00ffd5] transition duration-300 block"
              >
                {link.label}
              </a>
              
              <span
                className={`absolute bottom-0 left-0 h-[3px] bg-[#00ffd5] transition-all duration-300 ${
                  activeSection === link.href ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>

    </>
  );
}

export default Navbar;