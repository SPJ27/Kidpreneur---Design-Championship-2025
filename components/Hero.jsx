'use client'
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaLightbulb } from "react-icons/fa";
import { FcBusinessman, FcIdea, FcPositiveDynamic } from "react-icons/fc";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 overflow-hidden">
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold text-[#333] leading-tight"
          >
            Kidpreneur – Where Student Ideas Come Alive
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-gray-600"
          >
            Submit your startup idea. Inspire others. Get inspired. 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3"
          >
            <Link
              to="/submit"
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <FaLightbulb className="text-yellow-300" /> Submit Your Idea
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 flex justify-center md:justify-end"
        >
          <img
            src="/Hero.png"
            className="w-56 md:w-72 lg:w-80"
            alt="Hero illustration"
          />
        </motion.div>
      </section>

      <div
        ref={ref}
        className="bg-[#ffede7] py-10 px-6 md:px-20 flex items-center justify-center border-t border-gray-200"
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            { icon: <FcIdea size={36} />, stat: 100, label: "Ideas Submitted" },
            { icon: <FcBusinessman size={36} />, stat: 50, label: "Students Inspired" },
            { icon: <FcPositiveDynamic size={36} />, stat: 30, label: "Projects Launched" },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 px-6 py-4 rounded-xl"
            >
              <div>{item.icon}</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {inView && <CountUp end={item.stat} duration={1.5} />}
                </p>
                <p className="text-gray-500 text-sm md:text-base">{item.label}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
