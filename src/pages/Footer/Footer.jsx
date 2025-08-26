import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaHeart, FaCode } from "react-icons/fa";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04081A] border-t border-gray-800/50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-[#04081A]/90 to-transparent z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-sm" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Mathiyalakan
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Mathi200204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group"
              >
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mathiyalakan-arulkumaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/_mathi0405_?igsh=MThhNTVjaXYwdmhjMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group"
              >
                <FaInstagram className="text-gray-400 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/share/19hrznEXnM/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 group"
              >
                <FaFacebookF className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "Skills", id: "skills" },
                { name: "Education", id: "education" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="block text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <a
                  href="mailto:mathiyalakan75@gmail.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  mathiyalakan75@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-gray-400 text-sm">kannakinagar,visuvamadu,Kilinochchi, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              Developed with <FaHeart className="text-red-500 text-xs" /> by
              <span className="font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Mathiyalakan Arulkumaran
              </span>
            </span>
            <span className="hidden md:inline">•</span>
            <span>© {currentYear} All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm text-gray-400 group-hover:text-teal-400 transition-colors">
              Back to Top
            </span>
            <ArrowUp className="w-4 h-4 text-teal-400 group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Credits */}
        <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS, and ❤️ • Powered by creativity and caffeine
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}