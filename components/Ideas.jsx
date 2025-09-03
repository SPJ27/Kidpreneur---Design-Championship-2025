import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { PiRankingDuotone } from "react-icons/pi";
import { supabase } from "../utils/supabase";
const TopIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const {data} = await supabase.from('kid_ideas').select('*');
      const sorted = data.sort((a, b) => b.rating - a.rating);
      setIdeas(sorted);
    };
    fetch();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b ">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
        <PiRankingDuotone className="mr-2" /> Top Ideas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <img src={idea.startup_logo} alt={idea.startup_idea} className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {idea.startup_idea}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{idea.startup_desc}</p>

            <div className="flex justify-between items-center text-gray-700 mt-4">
              <span className="flex items-center gap-1 text-sm">
                <FaRegStar className="text-yellow-500" /> {idea.rating}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <BiLike className="text-blue-500" /> {idea.likes}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 rounded-md bg-orange-600 text-white font-semibold shadow-md hover:scale-105 transition">
          View More Ideas
        </button>
      </div>
    </section>
  );
};

export default TopIdeas;
