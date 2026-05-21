import React from "react";

function Education() {
  const educationList = [
    {
      course: "Diploma in Computer Engineering",
      year: "2027",
      institution: "Govt Women's Polytechnic College, TVM",
      status: "Pursuing"
    },
    {
      course: "ITI Draughtsman Civil",
      year: "2023",
      institution: "Govt Women's ITI, Parassala",
      status: "Completed"
    }
  ];

  return (
    <section
      id="education"
      className="w-[94%] mx-auto bg-white rounded-3xl shadow-2xl my-4 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-2rem)]"
    >
      {/* LEFT COLUMN: EDUCATION DETAILS (വിശാലമായ കാർഡുകൾക്കായി 12 കോളം സ്പേസ് നൽകി) */}
      {/* padding അല്പം കുറച്ച് (p-6 md:p-10), ഉയരം full ആക്കി മാറ്റിയിരിക്കുന്നു */}
      <div className="lg:col-span-12 p-6 md:p-10 flex flex-col justify-center gap-6 h-full">
        
        <div className="flex flex-col gap-4">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-[#08192e] tracking-wide relative w-fit">
            Education
            <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#00ffd5]"></span>
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            My academic foundation combines computer science principles with technical engineering expertise.
          </p>

          {/* EDUCATION CARDS CONTAINER */}
          <div className="flex flex-col gap-6 mt-4 relative border-l-4 border-gray-200 pl-8 ml-2">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg hover:bg-gray-100/50 transition duration-300 w-full"
              >
                {/* ടൈംലൈൻ ഡോട്ട് - ബോർഡർ കനം കൂട്ടിയതിനാൽ അതിന്റെ അലൈൻമെന്റ് കൃത്യമാക്കി (left-[-41px]) */}
                <span className="absolute left-[-41px] top-9 w-5 h-5 rounded-full bg-[#08192e] border-4 border-white shadow-sm ring-4 ring-[#00ffd5]/30"></span>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    {/* കോഴ്സ് പേര് - text-2xl-ൽ നിന്നും text-3xl / text-4xl ലോട്ട് വർദ്ധിപ്പിച്ചു */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 tracking-tight">
                      {edu.course}
                    </h3>
                    {/* കോളേജ് വിവരം - text-base-ൽ നിന്നും text-lg ആക്കി മാറ്റി */}
                    <p className="text-lg md:text-xl text-gray-600 font-medium mt-2">
                      {edu.institution}
                    </p>
                  </div>

                  {/* വർഷവും സ്റ്റാറ്റസും കാണിക്കുന്ന ബാഡ്ജുകൾ - കൂടുതൽ വ്യക്തതയ്ക്കായി സൈസ് കൂട്ടി */}
                  <div className="flex flex-row sm:flex-col lg:flex-row items-start sm:items-end lg:items-center gap-3 self-start sm:self-auto shrink-0">
                    <span className="px-5 py-2 bg-[#08192e] text-white text-base font-extrabold rounded-full shadow-sm whitespace-nowrap">
                      {edu.year}
                    </span>
                    <span className={`px-4 py-1.5 text-sm font-extrabold rounded-full shadow-sm whitespace-nowrap ${
                      edu.status === "Pursuing" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;