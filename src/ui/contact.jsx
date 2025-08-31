import { Container, Section, Button, Card } from "../components/components";

// --- Contact Info Data ------------------------------------------------------
const CONTACT_INFO = [
  { icon: "📞", label: "Phone", value: "+91 811 399 7771", href: "tel:+918113997771" },
  { icon: "✉️", label: "Email", value: "hi.bitsky@gmail.com", href: "mailto:hi.bitsky@gmail.com" },
  {
    icon: "📍",
    label: "Address",
    value: (
      <>
        bitsky by crankUrBrain<br />
        Vaishnav, Edanad.P.O, Chengannur<br />
        Alapuzha, Kerala, India, 689123
      </>
    ),
  },
  { icon: "⏰", label: "Working hours", value: "Mon – Sat: 9:00 AM – 8:00 PM" },
];

// --- Contact Component ------------------------------------------------------
const Contact = () => (
  <Section id="contact" className="bg-slate-50">
    <Container>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Contact us</h2>
          <p className="mt-2 max-w-xl text-slate-700">
            Prefer a quick chat? Ping us on WhatsApp or drop an email—we usually reply fast.
          </p>

          <div className="mt-6 space-y-4">
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-slate-700 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-700">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you shortly.");
            }}
            className="grid gap-4"
          >
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-sm font-medium">{field.label}</label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="mt-1 w-full rounded-xl border px-4 py-3 outline-none ring-sky-100 focus:ring"
                />
              </div>
            ))}

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={5}
                required
                placeholder="How can we help?"
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none ring-sky-100 focus:ring"
              />
            </div>

            <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700">
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  </Section>
);

export { Contact };
