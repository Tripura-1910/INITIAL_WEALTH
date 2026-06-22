import { motion } from "framer-motion";

import asset1 from "../assets/100cr.jpeg";
import asset2 from "../assets/user.jpeg";
import image1 from "../assets/image4.jpg";
import image2 from "../assets/image5.jpg";
import image3 from "../assets/image6.jpg";

const Showcase = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-amber-600 font-semibold tracking-[0.2em] uppercase text-sm">
            Inside Initial Wealth
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Where Financial Expertise
            <br />
            Meets Human Relationships
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A trusted environment where experienced advisors work closely
            with clients to create sustainable financial success.
          </p>
        </motion.div>

        {/* Premium Layout */}
        <div className="mt-20 grid lg:grid-cols-12 gap-8">
          
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-[32px] bg-white shadow-sm border border-slate-200">
              <img
                src={asset1}
                alt=""
                className="h-[600px] w-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={asset2}
                alt=""
                className="h-[280px] w-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>

            <div className="rounded-[32px] bg-white border border-slate-200 p-10 shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900">
                500+
              </h3>

              <p className="mt-2 text-slate-600">
                Families, professionals and business owners trust
                Initial Wealth for guidance and long-term planning.
              </p>

              <div className="mt-8 h-px bg-slate-200" />

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-2xl font-bold text-amber-600">
                    ₹100Cr+
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Assets Guided
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-amber-600">
                    10+
                  </h4>
                  <p className="text-slate-500 text-sm mt-1">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[image1, image2, image3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={img}
                alt=""
                className="h-[320px] w-full object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;