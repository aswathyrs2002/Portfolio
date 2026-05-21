import React, { useState } from "react"; // 1. ഇവിടെ useState ഉണ്ടെന്ന് ഉറപ്പാക്കി

function Skills() {
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "AutoCAD", type: "Design" },
    { name: "Revit", type: "Design" },
    { name: "V-Ray", type: "Design" },
    { name: "3Ds Max", type: "Design" },

    { name: "HTML", type: "Dev" },
    { name: "CSS", type: "Dev" },
    { name: "JavaScript", type: "Dev" },
    { name: "React JS", type: "Dev" },
    { name: "Python", type: "Dev" },
    { name: "C Programming", type: "Dev" },
    { name: "Java", type: "Dev" },
    { name: "PHP", type: "Dev" },
    { name: "MySQL", type: "Dev" },

    { name: "MS Word", type: "Tools" },
    { name: "MS Excel", type: "Tools" },
  ];

  const filters = ["All", "Dev", "Design", "Tools"];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((s) => s.type === filter);

  return (
    <section
      id="skills"
      className="w-[94%] mx-auto bg-white rounded-3xl shadow-2xl my-4 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-2rem)]"
    >
      {/* LEFT COLUMN: SKILLS CONTENT */}
      {/* Changed: Adjusted vertical padding (p-6 md:p-10) and gap (gap-6) to maintain single page layout */}
      <div className="lg:col-span-12 p-6 md:p-10 flex flex-col justify-center gap-6 h-full">
        
        <div className="flex flex-col gap-4">
          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold text-[#08192e] tracking-wide relative w-fit">
            Skills
            <span className="absolute bottom-[-6px] left-0 w-16 h-1 bg-[#00ffd5]"></span>
          </h1>

          <p className="text-lg text-gray-600 mt-1">
            My technical expertise spans across software engineering frameworks, engineering graphics, and productivity tools.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300
                  ${
                    filter === f
                      ? "bg-[#08192e] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* SKILLS TAGS */}
          {/* Changed: Changed layout to a responsive grid system. Font size is boosted to text-2xl/text-3xl while text is perfectly centered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 w-full">
            {filteredSkills.map((skill, i) => (
              <span
                key={i}
                className="py-5 px-4 rounded-xl text-2xl lg:text-3xl font-bold bg-[#0b2038] text-white hover:bg-[#00ffd5] hover:text-black transition duration-300 cursor-default shadow-sm hover:shadow-md text-center flex items-center justify-center min-h-[80px]"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;