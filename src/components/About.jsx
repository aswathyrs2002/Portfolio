import React from "react";

function About() {
  return (
    <section
      id="about-page"
      className="w-[92%] mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 mt-10 border border-gray-200"
    >
      {/* GRID LAYOUT - ചിത്രവും വിവരങ്ങളും വശങ്ങളിൽ വരാൻ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT COLUMN: IMAGE (40% space on large screens) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/a.jpg" // ഇവിടെ നിങ്ങളുടെ നല്ലൊരു ഫോട്ടോയുടെ ലിങ്ക് നൽകുക
              alt="Aswathy R S"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
            {/* നിങ്ങളുടെ പ്രിയപ്പെട്ട തീം കളർ നൽകിയ ഒരു ചെറിയ ബോർഡർ ഗ്ലോ എഫക്റ്റ് */}
            <div className="absolute inset-0 border-4 border-[#08192e]/10 rounded-2xl pointer-events-none group-hover:border-[#00ffd5] transition duration-300" />
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT (60% space on large screens) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Main Heading - വലിയ ഫ്രണ്ട് സൈസ് */}
          <h1 className="text-5xl font-extrabold text-[#08192e] tracking-wide">
            About Me
          </h1>

          {/* Subtitle - നിങ്ങളുടെ റോൾ വ്യക്തമാക്കാൻ */}
          <h3 className="text-2xl font-semibold text-blue-600">
            Aspiring Software Developer & Civil Draughtsman
          </h3>

          {/* Main Paragraph - വലിയ ഫോണ്ടിൽ സുഗമമായി വായിക്കാവുന്ന രൂപത്തിൽ */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            I am a highly motivated student with a unique blend of skills in 
            <span className="font-semibold text-[#08192e]"> Computer Engineering</span> and 
            <span className="font-semibold text-[#08192e]"> Civil Drafting</span>. I love creating clean, 
            modern web applications using technologies like React and Python, while bringing the 
            precision of design from my drafting background.
          </p>

          <p className="text-xl text-gray-600 leading-relaxed">
            I enjoy problem-solving, learning modern frameworks, and turning creative ideas into 
            functional digital solutions. My goal is to build impactful software that bridges technology 
            and design.
          </p>

          {/* QUICK DETAILS GRID - കൂടുതൽ വിവരങ്ങൾ കാണിക്കാൻ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-lg">
            <div className="flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Location</span>
              <span className="font-semibold text-[#08192e] mt-0.5">Trivandrum, Kerala</span>
            </div>
            <div className="flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Interests</span>
              <span className="font-semibold text-[#08192e] mt-0.5">UI/UX, Web Dev, 3D Modeling</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;