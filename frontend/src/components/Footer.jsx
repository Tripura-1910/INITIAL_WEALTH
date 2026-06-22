import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="py-20 border-b border-white/10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="uppercase tracking-[0.3em] text-amber-400 text-sm">
                Initial Wealth
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Helping You Build
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
                  Generational Wealth
                </span>
              </h2>

              <p className="mt-6 text-slate-400 max-w-xl leading-relaxed">
                Strategic financial planning, investment advisory,
                insurance solutions and wealth management designed
                to secure your future with confidence.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <button
                className="
                group
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-amber-500
                to-yellow-500
                text-slate-950
                font-semibold
                flex
                items-center
                gap-2
                hover:scale-105
                transition-all
              "
              >
                Schedule Consultation
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </button>
            </div>

          </div>

        </div>

        {/* Main Footer */}
        <div className="py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              Initial Wealth
            </h3>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Empowering individuals, families and businesses
              through trusted financial expertise and long-term
              wealth creation strategies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg">
              Navigation
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li><a href="/" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg">
              Services
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>Investment Planning</li>
              <li>Mutual Funds</li>
              <li>Insurance Advisory</li>
              <li>Retirement Planning</li>
              <li>Wealth Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3 text-slate-400">
                <MapPin
                  size={18}
                  className="mt-1 text-amber-400"
                />
                <span>
                  Kottayam, Kerala, India
                </span>
              </div>

              <div className="flex gap-3 text-slate-400">
                <Phone
                  size={18}
                  className="text-amber-400"
                />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3 text-slate-400">
                <Mail
                  size={18}
                  className="text-amber-400"
                />
                <span>info@initialwealth.in</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="
                h-11 w-11
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-amber-500
                hover:text-black
                transition-all
              "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                h-11 w-11
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-amber-500
                hover:text-black
                transition-all
              "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                h-11 w-11
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-amber-500
                hover:text-black
                transition-all
              "
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Initial Wealth.
            All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-slate-500">
            <a
              href="/privacy-policy"
              className="hover:text-amber-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-amber-400 transition"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;