const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 sm:py-24 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${className}`}
  >
    {children}
  </span>
);


const Button = ({ as: As = "a", href = "#", children, className = "", ...rest }) => (
  <As
    href={href}
    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow ${className}`}
    {...rest}
  >
    {children}
  </As>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 ${className}`}
  >
    {children}
  </div>
);

const PicCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border bg-white/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 ${className}`}
  >
    {children}
  </div>
);


export { Container, Section, Pill, Button, Card, PicCard };
