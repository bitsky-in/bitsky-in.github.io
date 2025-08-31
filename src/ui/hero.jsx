import React from "react";
import { Container, Pill, Button, Card } from "../components/components";

// --- Hero -------------------------------------------------------------------
const Hero = () => {
  return (
    <div
      id="top"
      className="relative isolate overflow-hidden min-h-[calc(100vh-4rem)] flex items-center"
    >
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50/90 via-white/30 to-emerald-50/50 backdrop-blur-sm" />

      {/* Content */}
      <Container className="flex flex-col items-center gap-10 py-16 sm:py-20">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center">
          <Pill>✨ Building the future, bit by bit</Pill>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Campus Operations, Simplified
          </h1>

          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-slate-600">
            We craft focused software for institutions so educators can spend
            more time on teaching and research—not on paperwork.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#about"
              className="bg-sky-600 text-white hover:bg-sky-700"
            >
              Learn more ➡️
            </Button>
            <Button
              href="#contact"
              className="bg-white text-sky-700 ring-1 ring-sky-200 hover:ring-sky-300"
            >
              Talk to us ☎️
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full">
          <div className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
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
            ].map((item, index) => (
              <Card
                key={index}
                className="flex items-start gap-3 hover:scale-105 transition-transform duration-300"
              >
                <span className="mt-1 text-xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Hero };
