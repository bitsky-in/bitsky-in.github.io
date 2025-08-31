import { Container, Section } from "../components/components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- FAQ Item ---------------------------------------------------------------
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border p-5 bg-white/40">
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

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-slate-700 overflow-hidden"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- FAQ Section ------------------------------------------------------------
const FAQ = () => {
  const faqList = [
    {
      q: "What is bitsky?",
      a: "An IT studio crafting software for institutions and organisations to streamline operations and improve efficiency.",
    },
    {
      q: "What services do you offer?",
      a: "Custom software and Android apps, plus training for students in future-ready technologies.",
    },
    // Add more FAQs here if needed
  ];

  return (
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

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {faqList.map((faq, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export { FAQ };
