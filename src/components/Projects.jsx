import React from "react";

function Projects() {
  // പ്രോജക്റ്റുകൾ എളുപ്പത്തിൽ കൂട്ടിച്ചേർക്കാൻ ഒരു അറേ (Array) ആക്കി മാറ്റിയിരിക്കുന്നു
  const projectList = [
    {
      title: "Portfolio Website",
      tech: "Built using React.",
      description: "A modern, responsive portfolio website to showcase my skills, projects, and achievements using Tailwind CSS and React features."
    },
    {
      title: "Doctor Appointment Website",
      tech: "Built using Django.",
      description: "A complete web application allowing patients to book appointments, view doctor schedules, and manage medical visits seamlessly."
    }
  ];

  return (
    <section
      id="project"
      className="w-[94%] mx-auto bg-white rounded-3xl shadow-2xl my-4 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-2rem)]"
    >
      {/* LEFT COLUMN: PROJECTS LIST (മുഴുവൻ സ്പേസും ഉപയോഗിക്കാൻ 12 കോളം ആക്കി) */}
      {/* vertical padding (p-6 md:p-10) ക്രമീകരിച്ച് കൃത്യമായി ഒരു പേജിൽ ഒതുക്കി */}
      <div className="lg:col-span-12 p-6 md:p-10 flex flex-col justify-center gap-6 h-full">
        
        <div className="flex flex-col gap-4">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-[#08192e] tracking-wide relative w-fit">
            Projects
            <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#00ffd5]"></span>
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            A showcase of my recent work, combining programming frameworks and functional design.
          </p>

          {/* PROJECT CARDS CONTAINER */}
          {/* രണ്ട് കാർഡുകളും വശങ്ങളിലായി വരാൻ grid-cols-1 md:grid-cols-2 നൽകി */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="shadow-md p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-gray-100/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* പ്രോജക്റ്റ് ടൈറ്റിൽ - text-2xl ൽ നിന്നും text-3xl / text-4xl ലോട്ട് വർദ്ധിപ്പിച്ചു */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-blue-700 tracking-tight">
                    {project.title}
                  </h3>
                  
                  {/* ടെക്നോളജി ഹൈലൈറ്റ് - text-sm ൽ നിന്നും text-base ആക്കി */}
                  <p className="text-base font-extrabold uppercase tracking-widest text-[#08192e] mt-2 opacity-90">
                    {project.tech}
                  </p>

                  {/* വിവരണം - text-l gൽ നിന്നും text-xl ആക്കി മാറ്റി */}
                  <p className="text-xl text-gray-600 mt-4 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;