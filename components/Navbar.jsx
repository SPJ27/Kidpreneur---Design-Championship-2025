import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-sm">
      <div className="px-8 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Kidpreneur Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-orange-500">
            KIDPRENEUR
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6 md:space-x-10">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/ideas", label: "Ideas" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative text-gray-700 hover:text-orange-600 font-medium transition-colors after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
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
