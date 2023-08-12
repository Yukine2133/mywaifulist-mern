import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black flex  items-center justify-between py-6 px-4">
      <div className="flex items-center gap-8">
        <Link to="/">
          <h1 className="text-2xl group hover:text-pink-500 transition-colors duration-300">
            My
            <span className="font-bold group-hover:text-white text-pink-500 transition-colors duration-300">
              Waifu
            </span>
            List
          </h1>
        </Link>
        <Link to="/">
          <h3 className="hover:text-violet-500 transition-colors duration-200">
            Home
          </h3>
        </Link>
        <Link to="/add">
          <h3 className="hover:text-purple-600 transition-colors duration-200">
            Add Waifu
          </h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
