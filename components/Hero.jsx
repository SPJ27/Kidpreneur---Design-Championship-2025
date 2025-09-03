'use client'
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaLightbulb } from "react-icons/fa";
import { FcBusinessman, FcIdea, FcPositiveDynamic } from "react-icons/fc";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <>
      <section className="relative pt-40 pb-18 px-6 flex items-center justify-center overflow-hidden">
        {/* Blobs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-40 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl text-left font-semibold text-[#333333] leading-tight"
          >
            Kidpreneur – Where Student Ideas Come Alive
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
          >
            Submit your startup idea. Inspire others. Get inspired. 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-600 text-white rounded-md font-semibold shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
              <FaLightbulb className="text-yellow-300" /> Submit Your Idea
            </button>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10"
        >
          <img src="/Hero.png" className="h-90" alt="Hero illustration" />
        </motion.div>
      </section>

      {/* Stats */}
      <div
        ref={ref}
        className="bg-[#ffede7] py-10 mx-20 flex items-center justify-center border border-gray-200 relative z-10"
      >
        <ul className="flex flex-wrap gap-10">
          {[
            { icon: <FcIdea size={40} />, stat: 100, label: "Ideas Submitted" },
            { icon: <FcBusinessman size={40} />, stat: 50, label: "Students Inspired" },
            { icon: <FcPositiveDynamic size={40} />, stat: 30, label: "Projects Launched" },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4 px-8 py-5 rounded-2xl min-w-[220px]"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">
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
