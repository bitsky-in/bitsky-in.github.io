import { Container, Section, Pill, Button, Card } from "../components/components";

// --- Navbar -----------------------------------------------------------------
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-black tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white shadow-md">b</span>
          <span className="text-lg sm:text-xl">bitsky</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="hover:text-sky-700" href="#about">About</a>
          <a className="hover:text-sky-700" href="#products">Products</a>
          <a className="hover:text-sky-700" href="#faq">FAQs</a>
          <a className="hover:text-sky-700" href="#contact">Contact</a>
        </nav>
        <button className="md:hidden" aria-label="menu">
          ☰
        </button>
      </Container>
    </header>
  );
};

export {Navbar};