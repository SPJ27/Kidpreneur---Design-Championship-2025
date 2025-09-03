import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-20 py-5 w-full flex bg-[#fff0dc]">
      <div className="flex flex-1 items-center">
        <img src="/logo.png" alt="Kidpreneur Logo" className="w-12 h-12 mr-1" />
        <h1 className="text-3xl font-extrabold tracking-wide text-orange-500">
          KIDPRENEUR
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <nav>
          <ul className="flex space-x-10 ">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/ideas"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Ideas
              </Link>
            </li>
            <li>
              <Link
                to="/submit"
                className="bg-gradient-to-br from-orange-600 to-amber-500 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-400   rounded-full px-5 py-2 text-white transition-colors font-medium"
              >
                Submit Idea
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
