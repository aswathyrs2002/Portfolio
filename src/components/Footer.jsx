import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-12 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Brand/Name */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-lg">Aswathy R S</h2>
          <p className="text-sm mt-1">Building digital experiences.</p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#About" className="hover:text-white transition-colors">About</a>
          <a href="#Projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#Contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-8 pt-4 border-t border-gray-900">
        © {new Date().getFullYear()} Aswathy R S | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;