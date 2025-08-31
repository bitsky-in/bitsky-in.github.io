import { Container, Section, Pill, Button, Card } from "../components/components";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



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

export const WhatsAppFAB = () => {

  const handleClick = () => {
    window.open("https://wa.me/918113997771", "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-20 h-20 cursor-pointer"
    >
      <DotLottieReact
        autoplay
        loop
        src="/videos/whatsapp.lottie"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};


const BottomGradient = () => (
  <div className="w-full h-4 bg-gradient-to-r from-sky-500 via-blue-500 to-green-500" />
);

export default BottomGradient;


export {Footer, BottomGradient};