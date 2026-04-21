import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Users, MessageCircle, Phone, ClipboardList, Dumbbell } from "lucide-react";

const testimonials = [
  {
    text: "Tavaly komoly térdműtétem volt, ez év elején kezdtem el nála rehabilitációs edzéseket a TRX-szel. Ma már nagyon jó edzettséggel bírok, a lábam tökéletes!",
    author: "Kriszti",
  },
  {
    text: "Vera a tegnapi foglalkozás elérte célját! Most már én is lassan tudok csak guggolást csinálni!",
    author: "Csapó Balázs",
  },
  {
    text: "Még sosem fáradtam el ennyire!",
    author: "István",
  },
  {
    text: "16 kilós súlyt nem szabad venni, olyan mint a gyerekcipő: gyorsan kinövöd!",
    author: "Dávid Laci",
  },
];

const steps = [
  {
    icon: Dumbbell,
    title: "Válassz edzést",
    text: "Nézd meg milyen edzéstípusok közül választhatsz, és melyik illik hozzád a legjobban.",
  },
  {
    icon: MessageCircle,
    title: "Keress meg",
    text: "Írj Messengeren, emailen, vagy hívj — megbeszéljük az első konzultációt.",
  },
  {
    icon: ClipboardList,
    title: "Konzultáció",
    text: "Első alkalommal kiderül milyen lehetőségeink vannak, és közösen döntjük el hogyan tovább.",
  },
  {
    icon: Phone,
    title: "Bejelentkezés",
    text: "Foglalj helyet az első edzésre. Akár aznap is megteheted, ha van szabad hely!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Helló intro */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-12">
            Helló!
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Formába szeretnél lendülni? Fogyni, formálódni akarsz? A céljaidat gyorsabban elérheted mint gondolnád! Néhány hónap alatt szemmel látható eredmények érhetők el heti 2-3 edzéssel és megfelelő táplálkozással. Jó társaság, változatos edzések és felkészült edző segít át az életmódváltás nehézségein.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Az első alkalommal kiderül milyen lehetőségeink vannak, majd ennek függvényében közösen döntjük el hogyan tovább. A kiscsoportos edzések lehetővé teszik, hogy egyénre szabott ütemben haladj.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">Hogyan tovább?</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><a href="#edzesek" className="text-primary hover:underline">Melyik edzést válasszam?</a></li>
              <li><Link to="/orarend" className="text-primary hover:underline">Mikor vannak az edzések?</Link></li>
              <li><a href="#felszereles" className="text-primary hover:underline">Milyen felszerelésre lesz szükségem?</a></li>
              <li><a href="#helyszin" className="text-primary hover:underline">Hol van az edzés? Lehet ott parkolni?</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* Edzések */}
      <Services />

      {/* Edzés időpontok röviden */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-4">
            Edzés <span className="text-gradient">időpontok</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Az időpont nem lehet akadály! Hétfőtől péntekig több mint 25 edzést tartok, ezért mindig találhatsz számodra megfelelőt délelőtt és délután is!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl uppercase font-semibold mb-2">Hétfő – Péntek</h3>
              <p className="text-muted-foreground">Több mint 25 edzés hetente, délelőtt és délután is.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl uppercase font-semibold mb-2">Kis csoportok</h3>
              <p className="text-muted-foreground">6-10 fős foglalkozásokra bejelentkezés szükséges, ez az első lépés ahhoz hogy formába hozd magad!</p>
            </div>
          </div>
          <Link
            to="/orarend"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
          >
            Tovább az órarendre
          </Link>
        </div>
      </section>

      <Equipment />

      {/* Vélemények */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
            Vélemények
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Amit a tanítványaim mondanak — szó szerint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-card border border-border rounded-xl p-8 flex flex-col gap-4"
              >
                <p className="text-foreground/90 italic leading-relaxed">"{t.text}"</p>
                <footer className="text-primary font-display text-sm uppercase tracking-wider">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Hogyan kezdj el? */}
      <section id="hogyan-kezdj-el" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
            Hogyan <span className="text-gradient">kezdj el?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Négy egyszerű lépés választ el az első edzéstől.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-bold text-primary/20">{i + 1}</span>
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg uppercase font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/kapcsolat"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
            >
              Vedd fel a kapcsolatot!
            </Link>
          </div>
        </div>
      </section>

      <Location />
      <Footer />
    </div>
  );
};

export default Index;
