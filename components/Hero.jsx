'use client '
import CountUp from "react-countup";
import { FaLightbulb } from "react-icons/fa";
import { FcBusinessman, FcIdea, FcPositiveDynamic } from "react-icons/fc";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7
  });
  return (
    <>
      <section className=" py-18 px-6 flex items-center justify-center ">
        {/* Content */}

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl text-left font-semibold text-[#333333] leading-tight ">
            Kidpreneur – Where Student Ideas Come Alive
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl ">
            Submit your startup idea. Inspire others. Get inspired. 🚀
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 ">
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-600 text-white rounded-md font-semibold shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105">
              <FaLightbulb className="text-yellow-300" /> Submit Your Idea
            </button>
          </div>
        </div>
        <div>
          <img src="/Hero.png" className="h-90" alt="" />
        </div>
      </section>
      <div ref={ref} className="bg-[#ffede7] py-10  mx-20  flex items-center justify-center border border-gray-200">
        <ul className="flex flex-wrap gap-10">
          {[
            {
              icon: <FcIdea size={40} />,
              stat: 100,
              label: "Ideas Submitted",
            },
            {
              icon: <FcBusinessman size={40} />,
              stat: 50,
              label: "Students Inspired",
            },
            {
              icon: <FcPositiveDynamic size={40} />,
              stat: 30,
              label: "Projects Launched",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4 px-8 py-5 rounded-2xl min-w-[220px]"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">
                  {inView && <CountUp end={item.stat} duration={1.5} />}
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
