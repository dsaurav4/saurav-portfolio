import { useEffect } from "react";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Saurav <span className="text-blue-500">Dahal</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden font-bold"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-9">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            <a href="https://www.linkedin.com/in/sauravdahal4/">
              <img src={linkedinIcon} alt="" height={30} width={30} />
            </a>

            <a href="https://github.com/dsaurav4">
              <img src={githubIcon} alt="" height={30} width={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
