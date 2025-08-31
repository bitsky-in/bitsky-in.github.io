import { Container, Section, Button, Card } from "../components/components";
import { motion } from "framer-motion";

// --- Single Product Card ----------------------------------------------------
const Product = ({ title, blurb, cta, href, soon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Card className="flex h-full flex-col shadow-md hover:shadow-xl transition-shadow">
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-slate-700">{blurb}</p>
      </div>
      <div className="mt-6">
        {soon ? (
          <motion.div
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Coming soon 🚀
          </motion.div>
        ) : (
          <motion.div whileHover={{ x: 6 }}>
            <Button
              href={href}
              className="bg-sky-600 text-white hover:bg-sky-700"
            >
              {cta} ➡️
            </Button>
          </motion.div>
        )}
      </div>
    </Card>
  </motion.div>
);

// --- Products Section -------------------------------------------------------
const Products = () => (
  <Section id="products" className="bg-slate-50">
    <Container>
      <motion.h2
        className="text-3xl font-black sm:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our products
      </motion.h2>

      <motion.p
        className="mt-2 max-w-2xl text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Focused apps that solve real campus problems.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Product
          title="CampusTag"
          blurb="Capture geo-tagged photos with overlays like location, block name and time. Store in the cloud and retrieve evidence in seconds with powerful search."
          cta="View on Play Store"
          href="https://play.google.com/store/apps/details?id=com.vishnurajan.sahrdayahelper"
        />
        <Product
          title="My Card Wallet"
          blurb="Keep all your credit and debit cards in one place—offline or online—with strong encryption, biometric unlock and quick copy-to-pay."
          cta="View on Play Store"
          href="https://play.google.com/store/apps/details?id=com.vishnurajan.mycardwallet"
        />
        <Product
          title="CampusTag+ (Secure)"
          blurb="Everything you love about CampusTag, enhanced with hardware-backed security and controls for accreditation bodies (AICTE/NAAC/NBA)."
          soon
        />
      </div>
    </Container>
  </Section>
);

export { Products };
