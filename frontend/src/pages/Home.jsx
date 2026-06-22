import {
  ShieldCheck,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";
import Showcase from "../components/ShowCase";

import image1 from "../assets/image4.jpg";
import image2 from "../assets/image5.jpg";
import image3 from "../assets/image6.jpg";
import StatsSection from "../components/Stats";





const Home = () => {



const [current, setCurrent] = useState(0);

const images = [
  image1,
  image2,
  image3,
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);


  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
<section className="relative min-h-screen overflow-hidden bg-[#071018]">
  {/* Background Image */}
 <div className="absolute inset-0 overflow-hidden">
 <img
  key={current}
  src={images[current]}
  alt=""
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-[1%_center]
  "
/>
</div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#071018] via-[#071018]/85 to-[#071018]/40" />

  {/* Gradient Mesh */}
  <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[160px]" />
  <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[160px]" />

  {/* Grid Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 min-h-screen flex items-center">
    <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
      {/* Left */}
      <div className="lg:col-span-7">
      

        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white">
          Wealth
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
            Built With
          </span>
          Trust
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
          Helping families, professionals and businesses create
          long-term financial success through expert investment,
          insurance and wealth management solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:scale-105 transition-all">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition">
            Explore Services
          </button>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:hidden">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
            <h3 className="text-2xl font-bold text-amber-400">
              500+
            </h3>
            <p className="text-slate-300 text-sm">
              Clients Served
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
            <h3 className="text-2xl font-bold text-amber-400">
              ₹100Cr+
            </h3>
            <p className="text-slate-300 text-sm">
              Assets Guided
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex lg:col-span-5 justify-end">
        <div className="relative">
          <div className="w-[340px] rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/10 p-8">
            <p className="text-slate-400 text-sm">
              Trusted Wealth Partner
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-amber-400">
                  500+
                </h3>
                <p className="text-slate-300">
                  Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-400">
                  ₹100Cr+
                </h3>
                <p className="text-slate-300">
                  Assets Guided
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-400">
                  10+
                </h3>
                <p className="text-slate-300">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 rounded-2xl bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 p-5">
            <p className="text-emerald-300 text-sm">
              Financial Growth
            </p>
            <h4 className="text-white text-2xl font-bold">
              +28.4%
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
    <span className="text-xs tracking-widest text-slate-400 uppercase">
      Scroll
    </span>
    <div className="mt-2 h-10 w-[1px] bg-gradient-to-b from-white to-transparent" />
  </div>
</section>


      <div>
        <Showcase/>
      </div>

      {/* Stats */}
   <StatsSection/>
      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">
              Financial Services Designed Around You
            </h2>

            <p className="mt-5 text-slate-600">
              Personalized financial solutions to help you protect, grow,
              and manage your wealth confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
           <div className="
group
p-8
rounded-3xl
bg-white
border
border-slate-200
hover:border-amber-400
hover:-translate-y-2
transition-all
duration-500
shadow-lg
hover:shadow-2xl
">
              <TrendingUp className="text-amber-500 group-hover:text-emerald-600" size={36} />
              <h3 className="mt-6 text-xl font-semibold">
                Investment Planning
              </h3>
              <p className="mt-3 text-slate-600">
                Strategic investment guidance tailored to your financial goals.
              </p>
            </div>

     <div className="
group
p-8
rounded-3xl
bg-white
border
border-slate-200
hover:border-amber-400
hover:-translate-y-2
transition-all
duration-500
shadow-lg
hover:shadow-2xl
">
              <ShieldCheck className="text-amber-500 group-hover:text-emerald-600" size={36} />
              <h3 className="mt-6 text-xl font-semibold">
                Risk Management
              </h3>
              <p className="mt-3 text-slate-600">
                Protect your future with comprehensive financial safeguards.
              </p>
            </div>
<div className="
group
p-8
rounded-3xl
bg-white
border
border-slate-200
hover:border-amber-400
hover:-translate-y-2
transition-all
duration-500
shadow-lg
hover:shadow-2xl
">
              <Briefcase className="text-amber-500 group-hover:text-emerald-600" size={36} />
              <h3 className="mt-6 text-xl font-semibold">
                Wealth Advisory
              </h3>
              <p className="mt-3 text-slate-600">
                Long-term wealth strategies focused on sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     <section className="relative py-32 overflow-hidden bg-white">
  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[150px]" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div>
        <span className="uppercase tracking-[0.3em] text-amber-600 text-sm font-semibold">
          Why Initial Wealth
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
          Financial Guidance
          <span className="block text-slate-500">
            Built On Trust
          </span>
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
          We help individuals, families and businesses make informed
          financial decisions through transparent advice, disciplined
          planning and long-term wealth strategies.
        </p>

        <div className="mt-12 space-y-8">

          <div className="flex gap-5">
            <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center">
              <ShieldCheck className="text-amber-500" size={26} />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-900">
                Transparent Advisory
              </h4>

              <p className="mt-2 text-slate-600">
                Honest recommendations focused entirely on your
                financial objectives.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Users className="text-emerald-600" size={26} />
            </div>

            <div>
              <h4 className="text-xl font-semibold text-slate-900">
                Client-First Approach
              </h4>

              <p className="mt-2 text-slate-600">
                Personalized strategies tailored to your unique
                financial journey.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Premium Card */}
      <div className="relative">

        <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />

        <div className="relative rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">
                Trusted Wealth Partner
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                Schedule A Consultation
              </h3>
            </div>

            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500" />
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Connect with our financial experts and discover
            opportunities to grow, protect and manage your wealth
            confidently.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-5 mt-10">

            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                500+
              </h4>
              <p className="text-sm text-slate-500">
                Clients
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                ₹100Cr+
              </h4>
              <p className="text-sm text-slate-500">
                Assets
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                10+
              </h4>
              <p className="text-sm text-slate-500">
                Years
              </p>
            </div>

          </div>

          <button
            className="
            mt-10
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-amber-500
            to-yellow-500
            text-slate-950
            font-semibold
            hover:scale-[1.02]
            transition-all
            duration-300
          "
          >
            Book Consultation
          </button>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* CTA */}
<section className="relative py-32 bg-white overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-100/60 rounded-full blur-[180px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
    <div
      className="
      relative
      overflow-hidden
      rounded-[48px]
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-[#0f172a]
      px-8
      py-20
      lg:px-20
      lg:py-24
      border
      border-white/10
      shadow-[0_30px_120px_rgba(0,0,0,0.35)]
    "
    >
      {/* Decorative Elements */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[140px]" />

      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative text-center max-w-4xl mx-auto">
        <span
          className="
          inline-flex
          items-center
          rounded-full
          border
          border-amber-400/20
          bg-white/5
          backdrop-blur-xl
          px-5
          py-2
          text-sm
          font-medium
          text-amber-300
        "
        >
          Start Your Financial Journey
        </span>

        <h2
          className="
          mt-8
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          leading-[1]
          text-white
        "
        >
          Build Wealth With
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            Confidence
          </span>
        </h2>

        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-slate-300
          leading-relaxed
          max-w-2xl
          mx-auto
        "
        >
          Whether you're planning for retirement, growing investments,
          protecting assets, or building generational wealth, our advisors
          are here to guide every step of your journey.
        </p>

        {/* Metrics */}
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              500+
            </h3>
            <p className="text-slate-400 text-sm">
              Clients Served
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              ₹100Cr+
            </h3>
            <p className="text-slate-400 text-sm">
              Assets Guided
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-amber-400">
              10+
            </h3>
            <p className="text-slate-400 text-sm">
              Years Experience
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-amber-500
            to-yellow-500
            text-slate-950
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
          >
            Schedule Consultation
          </button>

          <button
            className="
            px-8
            py-4
            rounded-2xl
            border
            border-white/15
            bg-white/5
            backdrop-blur-xl
            text-white
            hover:bg-white/10
            transition
          "
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;