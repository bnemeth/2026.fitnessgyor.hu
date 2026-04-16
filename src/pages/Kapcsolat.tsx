import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import { Phone, Mail, Facebook } from "lucide-react";

const Kapcsolat = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
              Kapcsolat
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Az edzésekkel kapcsolatos kérdésekkel, időpont egyeztetésért keress személyesen a teremben, telefonon, email-en, vagy akár a Facebook-on.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <a
                href="tel:+36705104440"
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Phone className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg uppercase font-semibold mb-2">Telefon</h3>
                <p className="text-muted-foreground">06 70 510 44 40</p>
              </a>
              <a
                href="mailto:nemavera77@gmail.com"
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Mail className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg uppercase font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">nemavera77@gmail.com</p>
              </a>
              <a
                href="https://www.facebook.com/fitnessgyor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Facebook className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg uppercase font-semibold mb-2">Facebook</h3>
                <p className="text-muted-foreground">facebook.com/fitnessgyor</p>
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-16">
              <p className="text-foreground/90 text-center text-lg">
                Az időpont nem lehet akadály! Hétfőtől péntekig több mint 25 edzést tartok, ezért mindig találhatsz számodra megfelelőt délelőtt és délután is.
              </p>
            </div>
          </div>
        </section>
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default Kapcsolat;
