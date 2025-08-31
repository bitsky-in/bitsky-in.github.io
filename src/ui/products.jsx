import { Container, Section, Button, PicCard } from "../components/components";

// --- Product Component ------------------------------------------------------
const Product = ({ title, blurb, cta, href, soon, image }) => (
  <PicCard className="flex flex-col shadow-md hover:shadow-xl transition-shadow overflow-hidden">
    {/* Image */}
    {image && (
      <img src={image} alt={title} className="w-full h-auto object-cover" />
    )}

    {/* Content */}
    <div className="flex-1 p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-700">{blurb}</p>
    </div>

    {/* CTA or Coming Soon */}
    <div className="p-4">
      {soon ? (
        <div className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-slate-100 text-slate-600">
          Coming soon 🚀
        </div>
      ) : (
        <Button
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-600 text-white hover:bg-sky-700"
        >
          {cta} ➡️
        </Button>
      )}
    </div>
  </PicCard>
);

// --- Products Data ----------------------------------------------------------
const PRODUCTS = [
  {
    title: "CampusTag",
    blurb: "Capture geo-tagged photos with overlays like location, block name and time. Store in the cloud and retrieve evidence in seconds with powerful search.",
    cta: "View on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.vishnurajan.sahrdayahelper",
    image: "/images/product1.png",
  },
  {
    title: "My Card Wallet",
    blurb: "Keep all your credit and debit cards in one place—offline or online—with strong encryption, biometric unlock and quick copy-to-pay.",
    cta: "View on Play Store",
    href: "https://play.google.com/store/apps/details?id=com.vishnurajan.mycardwallet",
    image: "/images/product2.png",
  },
  {
    title: "CampusTag+ (Secure)",
    blurb: "Everything you love about CampusTag, enhanced with hardware-backed security and controls for accreditation bodies (AICTE/NAAC/NBA).",
    soon: true,
    image: "/images/product3.png",
  },
];

// --- Products Section -------------------------------------------------------
const Products = () => (
  <Section id="products" className="bg-slate-50">
    <Container>
      <h2 className="text-3xl font-black sm:text-4xl">Our products</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Focused apps that solve real campus problems.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </Container>
  </Section>
);

export { Products };
