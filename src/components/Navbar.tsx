import React, { useState, useEffect } from "react";

interface NavbarProps {
  links: {
    name: string;
    href: string;
  }[];
}
const whatsappNumber = "56975290911";
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          {/* <a href="/">AstroLogo</a> */}
          <img
            src="./logo_centauri.webp"
            alt="Logo Centauri"
            className="h-44"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-sm uppercase font-medium hover:text-teal-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="group relative flex items-center justify-center px-6 py-2 text-sm md:text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-md shadow-lg transition-all duration-[600ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:from-cyan-600 hover:to-cyan-400  focus:outline-none  focus:ring-cyan-500"
          >
            <span className="relative z-10">Contacto</span>

            {/* Aura Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-200 blur-md opacity-50 group-hover:opacity-75 transition-all duration-[800ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-6 h-1 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : "mb-1"
            }`}
          />
          <div
            className={`w-6 h-1 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "mb-1"
            }`}
          />
          <div
            className={`w-6 h-1 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black fixed top-16 left-0 w-full h-screen transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-lg font-medium hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-teal-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-teal-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
