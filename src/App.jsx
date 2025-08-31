import React from "react";
import {Navbar} from "./ui/navbar"
import {Hero} from "./ui/hero"
import {About} from "./ui/about"
import {Products} from "./ui/products"
import {FAQ} from "./ui/faq"
import {Contact} from "./ui/contact"
import {Footer} from "./ui/footer"
import {WhatsAppFAB} from "./ui/footer"




export default function BitskySite() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
