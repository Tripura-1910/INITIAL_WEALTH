import { motion } from "framer-motion";
import Counter from "../utils/Counter"
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Users,
  TrendingUp,
  Headset,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: TrendingUp,
    value: 100,
    prefix: "₹",
    suffix: "Cr+",
    label: "Assets Guided",
  },
  {
    icon: Headset,
    value: 24,
    suffix: "/7",
    label: "Client Support",
  },
];

export default function StatsSection() {

    const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-amber-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Our Impact
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Numbers That Reflect
            <span className="block text-amber-400">
              Trust & Performance
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            Building long-term financial success through expertise,
            transparency and personalized wealth solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
        ref={ref}
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-500/10 to-emerald-500/10" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon
                      size={26}
                      className="text-amber-400"
                    />
                  </div>
    
    <h3 className="mt-8 text-5xl font-black text-white">
  {stat.prefix}
  <Counter
    value={stat.value}
    start={inView}
  />
  {stat.suffix}
</h3>

                  <p className="mt-3 text-slate-400 text-lg">
                    {stat.label}
                  </p>

                  <div className="mt-8 h-[1px] bg-white/10" />

                  <p className="mt-5 text-sm text-slate-500">
                    Delivering measurable financial outcomes through strategic advisory services.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}