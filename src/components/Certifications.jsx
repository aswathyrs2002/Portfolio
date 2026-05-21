import React from "react";

function Certifications() {
  // സർട്ടിഫിക്കറ്റുകൾ എളുപ്പത്തിൽ മാനേജ് ചെയ്യാൻ ഒരു അറേ (Array) ആക്കി മാറ്റിയിരിക്കുന്നു
  const certificates = [
    {
      title: "Web Development Basics",
      description: "Responsive Design, JavaScript & Frontend Fundamentals",
      year: "2024",
    },
    {
      title: "AutoCAD Training Certificate",
      description: "2D Drafting, 3D Modeling & Civil Engineering Layouts",
      year: "2023",
    },
    {
      title: "3Ds Max, V-Ray Certificate",
      description: "3D Architectural Visualization & Realistic Rendering",
      year: "2023",
    },
    {
      title: "Revit Architecture Certificate",
      description: "Building Information Modeling (BIM) & 3D Modeling",
      year: "2024",
    },
    {
      title: "Skill Certificate (Draughtsman Civil)",
      description: "Government Approved Skill Certification in Civil Drafting",
      year: "2023",
    },
  ];

  return (
    <section
      id="certifications"
      className="w-[94%] mx-auto bg-white rounded-3xl shadow-2xl my-4 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-2rem)]"
    >
      {/* LEFT COLUMN: CERTIFICATIONS LIST (മുഴുവൻ സ്പേസും ഉപയോഗിക്കാൻ 12 കോളം ആക്കി) */}
      {/* padding ക്രമീകരിച്ച് കൃത്യമായി ഒരു പേജിൽ ഒതുക്കി */}
      <div className="lg:col-span-12 p-6 md:p-10 flex flex-col justify-center gap-6 h-full">
        
        <div className="flex flex-col gap-4">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-[#08192e] tracking-wide relative w-fit">
            Certifications
            <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#00ffd5]"></span>
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            Professional milestones and verified credentials that demonstrate my technical capabilities.
          </p>

          {/* CERTIFICATE LIST CONTAINER */}
          {/* 5 സർട്ടിഫിക്കറ്റുകൾ ഒരുമിച്ച് കൊള്ളിക്കാൻ grid-cols ഉപയോഗിച്ചു, overflow സ്ക്രോൾ ഒഴിവാക്കി */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 w-full">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-xl hover:bg-gray-100/50 transition duration-300 flex flex-col justify-between gap-4 h-full"
              >
                <div>
                  {/* സർട്ടിഫിക്കറ്റ് ടൈറ്റിൽ - text-2xl ൽ നിന്നും text-3xl ആയി വർദ്ധിപ്പിച്ചു */}
                  <h4 className="text-3xl font-bold text-blue-600 tracking-tight leading-snug">
                    {cert.title}
                  </h4>
                  {/* വിവരണം - text-base ൽ നിന്നും text-lg ആക്കി മാറ്റി */}
                  <p className="text-lg text-gray-600 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                
                {/* Year Badge - സൈസും ഫോണ്ടും കൂട്ടി കൂടുതൽ ഭംഗിയാക്കി */}
                <div className="mt-2">
                  <span className="px-5 py-2 bg-[#08192e] text-white text-base font-extrabold rounded-full inline-block shadow-sm">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Certifications;