import { Container, Section } from "../components/components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- FAQ Item with animation ------------------------------------------------
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border p-5 bg-white/40"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between font-semibold text-left"
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ➡️
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-slate-700"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- FAQ Section ------------------------------------------------------------
const FAQ = () => (
  <Section id="faq" className="bg-white">
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-black sm:text-4xl"
      >
        bitsky FAQs
      </motion.h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <FAQItem
          q="What is bitsky?"
          a="An IT studio crafting software for institutions and organisations to streamline operations and improve efficiency."
        />
        <FAQItem
          q="What services do you offer?"
          a="Custom software and Android apps, plus training for students in future-ready technologies."
        />
      </div>
    </Container>
  </Section>
);

export { FAQ };
