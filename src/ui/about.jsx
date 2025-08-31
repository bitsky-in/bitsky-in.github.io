import { motion } from "framer-motion";
import { Container, Section, Pill, Button, Card } from "../components/components";

// --- Animation Variants -----------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- About ------------------------------------------------------------------
const About = () => (
  <Section id="about" className="bg-white">
    <Container>
      <motion.div
        className="grid items-center gap-10 lg:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-black sm:text-4xl">About us</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            At <span className="font-semibold">bitsky</span>, we believe campuses should run on clarity, not
            chaos. Our small team blends engineering and education to build bespoke
            tools that remove friction from audits, documentation, and day-to-day
            operations.
          </p>
          <p className="mt-4 text-slate-700">
            You get thoughtfully designed software; your faculty gets time back; your
            institution gets results.
          </p>
          <motion.div
            className="mt-6 text-sm text-slate-600"
            variants={fadeInUp}
          >
            Registered under UDYAM-KL-01-0045596 (Micro Enterprise, Computer Programming Services).
          </motion.div>
        </motion.div>

        {/* Card Section */}
        <motion.div variants={fadeInUp}>
          <Card className="p-0">
            <motion.div
              className="grid grid-cols-2 divide-x divide-slate-100"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Best offers",
                "Free delivery",
                "Thoughtful design",
                "Comfort",
                "Support 24/7",
                "Good vibes",
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 p-4"
                  variants={fadeInUp}
                >
                  <motion.span
                    className="inline-block h-2 w-2 rounded-full bg-sky-500"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                  />
                  <span className="text-sm">{t}</span>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  </Section>
);

export { About };
