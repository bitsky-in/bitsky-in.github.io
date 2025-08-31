import { Container, Section, Pill, Button, Card } from "../components/components";

// --- Contact ----------------------------------------------------------------
const Contact = () => (
  <Section id="contact" className="bg-slate-50">
    <Container>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Contact us</h2>
          <p className="mt-2 max-w-xl text-slate-700">
            Prefer a quick chat? Ping us on WhatsApp or drop an email—we usually reply fast.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+918113997771" className="text-slate-700 hover:underline">+91 811 399 7771</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:hi.bitsky@gmail.com" className="text-slate-700 hover:underline">hi.bitsky@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-slate-700">bitsky by crankUrBrain<br />Vaishnav, Edanad.P.O, Chengannur<br />Alapuzha, Kerala, India, 689123</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">⏰</span>
              <div>
                <p className="font-semibold">Working hours</p>
                <p className="text-slate-700">Mon – Sat: 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you shortly.");
            }}
            className="grid gap-4"
          >
            <div>
              <label className="text-sm font-medium">Name</label>
              <input required className="mt-1 w-full rounded-xl border px-4 py-3 outline-none ring-sky-100 focus:ring" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border px-4 py-3 outline-none ring-sky-100 focus:ring" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-xl border px-4 py-3 outline-none ring-sky-100 focus:ring" placeholder="How can we help?" />
            </div>
            <Button as="button" type="submit" className="bg-sky-600 text-white hover:bg-sky-700">
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  </Section>
);

export {Contact};