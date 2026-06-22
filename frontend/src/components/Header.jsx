import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowHeader(false);
      } else {
        // Scrolling Up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 px-4 lg:px-6
        transition-transform duration-500 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 h-20 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-between px-6">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-white">
              Initial Wealth
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-amber-300 uppercase">
              Vision To Value
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#home" className="text-white/80 hover:text-amber-300 transition">
              Home
            </a>

            <a href="#about" className="text-white/80 hover:text-amber-300 transition">
              About
            </a>

            <a href="#services" className="text-white/80 hover:text-amber-300 transition">
              Services
            </a>

            <a href="#gallery" className="text-white/80 hover:text-amber-300 transition">
              Gallery
            </a>

            <a href="#contact" className="text-white/80 hover:text-amber-300 transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-semibold hover:scale-105 transition-all duration-300">
              Book Consultation
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;