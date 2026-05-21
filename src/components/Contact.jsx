import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-[92%] mx-auto bg-white rounded-3xl shadow-2xl mt-10 border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-screen"
    >
      {/* LEFT COLUMN: CONTACT DETAILS (65% Space on Desktop) */}
      <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-center gap-10">
        
        <div className="flex flex-col gap-6">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-[#08192e] tracking-wide relative ">
            Contact Me
            <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-[#00ffd5]"></span>
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            Feel free to reach out to me for collaborations, job opportunities, or any technical queries.
          </p>

          {/* CONTACT CARDS CONTAINER */}
          <div className="flex flex-col gap-5 mt-4 text-2xl text-gray-700">
            
            {/* Phone Card */}
            <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition duration-300">
              <span className="text-3xl bg-white p-3 rounded-xl shadow-sm">📞</span>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Call Me</p>
                <p className="font-semibold text-[#08192e] mt-0.5">9947864617</p>
              </div>
            </div>

            {/* Email Card - നിങ്ങളുടെ ഒറിജിനൽ text-blue-600 നിലനിർത്തിയിട്ടുണ്ട് */}
            <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition duration-300">
              <span className="text-3xl bg-white p-3 rounded-xl shadow-sm">📧</span>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Me</p>
                <a
                  href="mailto:aswathyrs043@gmail.com"
                  className="font-semibold text-blue-600 hover:underline block mt-0.5 break-all"
                >
                  aswathyrs043@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition duration-300">
              <span className="text-3xl bg-white p-3 rounded-xl shadow-sm">📍</span>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Location</p>
                <p className="font-semibold text-[#08192e] mt-0.5">Kerala, India</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      
    </section>
  );
}

export default Contact;