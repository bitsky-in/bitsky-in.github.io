import React from "react";
import { motion } from "framer-motion";
import { Container, Pill, Button, Card } from "../components/components";

// --- Feature data ---
const FEATURES = [
  {
    icon: "✅",
    title: "Accreditation-ready",
    text: "Built with AICTE/NAAC/NBA workflows in mind.",
  },
  {
    icon: "🖼️",
    title: "Geo-tagged evidence",
    text: "Capture, organise and search proof in seconds.",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    text: "Fast Android apps your team actually enjoys using.",
  },
];

// --- Motion variants ---
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Hero = () => {
  return (
    <div id="top" className="relative isolate overflow-hidden flex items-center h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/fs.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/20 via-cyan-300/20 to-emerald-400/20 backdrop-blur-sm" />

      {/* Content */}
      <Container className="flex flex-col items-center gap-12 py-16 sm:py-20">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Tagline */}
          <motion.div {...fadeUp(0.2)}>
            <Pill className="text-white bg-sky-600/80">✨ Building the future, bit by bit</Pill>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.3)}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white"
          >
            Campus Operations, Simplified
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.5)} className="max-w-2xl text-lg leading-relaxed text-white/90">
            We craft focused software for institutions so educators can spend more time on teaching
            and research — not on paperwork.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.7)} className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              href="#about"
              className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:opacity-90"
            >
              Learn more ➡️
            </Button>
            <Button
              href="#contact"
              className="bg-white/80 backdrop-blur-sm text-sky-700 ring-1 ring-sky-200 hover:bg-white hover:ring-sky-300"
            >
              Talk to us ☎️
            </Button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div {...fadeUp(0.9)} className="w-full mt-6">
          <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {FEATURES.map(({ icon, title, text }, index) => (
              <Card
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="mt-1 text-xl">{icon}</span>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-800">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export { Hero };
