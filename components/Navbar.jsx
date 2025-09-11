import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/70 shadow-sm">
      <div className="px-6 md:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Kidpreneur Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-orange-500">
            KIDPRENEUR
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>

        <nav
          className={`${
            open ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 px-6 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/ideas", label: "Ideas" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative text-gray-700 hover:text-orange-600 font-large transition-colors after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/submit"
                className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 rounded-full px-5 py-2 text-white font-medium shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                Submit Idea
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
