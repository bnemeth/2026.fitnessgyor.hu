import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, AlertTriangle, Gift } from "lucide-react";

const plans = [
  {
    name: "4 alkalmas bérlet",
    price: "11 000 Ft",
    validity: "5 hét",
    highlight: false,
    description: "Heti ~1 edzés. Ideális ha most kezded vagy kipróbálnád az edzéseket.",
  },
  {
    name: "8 alkalmas bérlet",
    price: "20 000 Ft",
    validity: "5 hét",
    highlight: false,
    description: "Heti ~2 edzés. Jó választás a rendszeres mozgás bevezetéséhez.",
  },
  {
    name: "12 alkalmas bérlet",
    price: "26 000 Ft",
    validity: "5 hét",
    highlight: false,
    description: "Heti ~3 edzés. A legjobb eredmények eléréséhez ajánlott!",
  },
  {
    name: "24 alkalmas bérlet",
    price: "50 000 Ft",
    validity: "12 hét",
    highlight: false,
    description: "Heti ~2 edzés. Hosszú távú elköteleződés, rugalmas beosztással.",
  },
  {
    name: "Napijegy",
    price: "3 500 Ft",
    validity: "1 alkalom",
    highlight: false,
    description: "Egyetlen edzés kipróbálásához.",
  },
];

const rules = [
  {
    icon: Clock,
    title: "Érvényesség",
    text: "A bérleted az első edzés napjától számítva érvényes. Lejárhat akkor is ha nem használtad ki az összes alkalmat.",
  },
  {
    icon: CheckCircle,
    title: "Bejelentkezés",
    text: "Az edzésekre be kell jelentkezned. Ezt akár aznap is megteheted!",
  },
  {
    icon: AlertTriangle,
    title: "Lemondás",
    text: "Az edzéseket előző nap délig tudod lemondani. Időben lemondva másik edzésre jelentkezhetsz.",
  },
  {
    icon: Gift,
    title: "Ajánlói bónusz",
    text: "Ha új tanítványt hozol aki bérletet vásárol, kapsz egy ajándék edzést!",
  },
];

const Berletek = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
              Bérletek <span className="text-gradient">& árak</span>
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              A bérletedet bármelyik edzésre felhasználhatod: járhatsz vegyesen{" "}
              <Link to="/edzes/trx" className="text-primary hover:underline">TRX</Link>,{" "}
              <Link to="/edzes/kettlebell" className="text-primary hover:underline">Kettlebell</Link>,{" "}
              <Link to="/edzes/joga" className="text-primary hover:underline">Jóga</Link> és{" "}
              <Link to="/edzes/cross-training" className="text-primary hover:underline">Cross Training</Link> edzésre is!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`bg-card border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlight
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block bg-primary text-primary-foreground font-display text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      Legnépszerűbb
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold uppercase mb-1">{plan.name}</h3>
                  <p className="text-primary font-display text-2xl font-bold mb-1">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mb-3">Érvényes: {plan.validity}</p>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-center mb-12">
              Tudnivalók
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {rules.map((rule) => (
                <div key={rule.title} className="bg-card border border-border rounded-xl p-6">
                  <rule.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg uppercase font-semibold mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground text-sm">{rule.text}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-center mt-12 text-sm max-w-xl mx-auto">
              Nem szeretnénk hogy a szigorú szabályok miatt bármelyikünk rosszul érezze magát, ezért minden alapelvre lehet kivétel a körülmények figyelembe vételével.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Berletek;
