import React, { useState } from "react";

function Home() {
  const [activeSection, setActiveSection] = useState("#about");

  return (
    <>
      {/* HERO */}
      <header className="w-[92%] mx-auto mt-6 min-h-[90vh] rounded-3xl bg-gradient-to-br from-[#020e11] to-[#08192e] text-white flex flex-col justify-center items-center text-center px-6 shadow-2xl relative overflow-hidden">
        
        {/* IMAGE TAG ADDED HERE */}
        <div className="mb-6 relative group">
          <img
            src="/images/a.jpg" // ഇവിടെ നിങ്ങളുടെ ഇമേജ് ലിങ്ക് (URL) നൽകുക
            alt="Aswathy R S"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-[0_0_25px_rgba(0,255,213,0.3)] transition duration-300 group-hover:scale-105 group-hover:border-[#00ffd5]"
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-5">
          Hi, I'm Aswathy R S 👋
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Software Developer | Civil Draughtsman | Web Enthusiast
        </p>

        <a
          href="#contact"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-[#00ffd5] hover:text-black transition"
        >
          Hire Me
        </a>
      </header>
    </>
  );
}

export default Home;