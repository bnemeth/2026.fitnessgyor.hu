import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Helló intro */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-12">
            Hel<span className="text-gradient">ló!</span>
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-8">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Formába szeretnél lendülni? Fogyni, formálódni akarsz? A céljaidat gyorsabban elérheted mint gondolnád! Néhány hónap alatt szemmel látható eredmények érhetők el heti 2-3 edzéssel és megfelelő táplálkozással. Jó társaság, változatos edzések és felkészült edző segít át az életmódváltás nehézségein.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Az első alkalommal kiderül milyen lehetőségeink vannak, majd ennek függvényében közösen döntjük el hogyan tovább. A kis csoportos edzések lehetővé teszik, hogy egyénre szabott ütemben haladj.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">Hogyan tovább?</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><a href="#edzesek" className="text-primary hover:underline">Melyik edzést válasszam?</a></li>
              <li><Link to="/edzesek" className="text-primary hover:underline">Mikor vannak az edzések?</Link></li>
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
            Az időpont nem lehet akadály! Hétfőtől péntekig több mint 25 edzést tartok, ezért mindig találhatsz számodra megfelelőt délelőtt, délután de akár az ebédszünetben is!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl uppercase font-semibold mb-2">Hétfő – Péntek</h3>
              <p className="text-muted-foreground">Több mint 25 edzés hetente, délelőtt, délután és ebédidőben is.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-left">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl uppercase font-semibold mb-2">Kis csoportok</h3>
              <p className="text-muted-foreground">6-10 fős foglalkozásokra bejelentkezés szükséges, ez az első lépés ahhoz hogy formába hozd magad!</p>
            </div>
          </div>
          <Link
            to="/edzesek"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-300"
          >
            Tovább az órarendre
          </Link>
        </div>
      </section>

      <Equipment />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
