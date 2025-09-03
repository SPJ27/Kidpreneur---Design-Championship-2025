import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { BiLike } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { PiRankingDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase.from("kid_ideas").select("*");
      if (error) {
        setError(error);
      } else {
        setIdeas(data);
      }
      setLoading(false);
    };

    fetchIdeas();
  }, []);

  const sortedIdeas = [...ideas].sort((a, b) => {
    if (sortBy === "views") return b.views - a.views;
    if (sortBy === "likes") return b.likes - a.likes;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section className="py-16 bg-gradient-to-b">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
        <PiRankingDuotone className="mr-2" /> Top Ideas
      </h2>

      <div className="flex justify-center mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="rating">Sort by Rating</option>
          <option value="likes">Sort by Likes</option>
          <option value="views">Sort by Views</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Failed to load ideas.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {sortedIdeas.map((idea) => (
            <Link
              to={`/ideas/${idea.id}`}
              key={idea.id}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
            >
              <img
                src={idea.startup_logo}
                alt={idea.startup_idea}
                className="w-14 h-14 mb-4"
              />
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
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default IdeaList;
