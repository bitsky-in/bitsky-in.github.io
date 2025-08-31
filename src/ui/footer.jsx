import { Container, Section, Pill, Button, Card } from "../components/components";
import { motion } from "framer-motion";


// --- Footer -----------------------------------------------------------------
const Footer = () => (
  <footer className="border-t bg-white">
    <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p className="text-sm text-slate-600">© {new Date().getFullYear()} bitsky. All rights reserved.</p>
      <div className="flex items-center gap-6 text-sm">
        <a className="hover:text-sky-700" href="#about">About</a>
        <a className="hover:text-sky-700" href="#products">Products</a>
        <a className="hover:text-sky-700" href="#contact">Contact</a>
      </div>
    </Container>
  </footer>
);

// --- Floating WhatsApp ------------------------------------------------------
const WhatsAppFAB = () => (
  <motion.a
    href="https://wa.me/918113997771"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg"
  >
    💬 Chat
  </motion.a>
);


export {Footer, WhatsAppFAB};