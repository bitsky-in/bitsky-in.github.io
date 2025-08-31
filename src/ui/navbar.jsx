import { useState, useEffect } from "react";
import { Container } from "../components/components";

const NAV_ITEMS = ["About", "Products", "FAQs", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-gradient-to-r from-sky-500 via-blue-500 to-green-500 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-black tracking-tight transition-transform hover:scale-105"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sky-500 font-bold shadow-lg transform transition-transform duration-300 group-hover:rotate-12">
            {"</>"}
          </span>
          <span className="text-lg sm:text-xl text-white drop-shadow-md">bitsky</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white font-medium hover:text-gray-800 transition-colors before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-rose-300 before:transition-all hover:before:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
          aria-label="menu"
        >
          ☰
        </button>
      </Container>
    </header>
  );
};

export { Navbar };
