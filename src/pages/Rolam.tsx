import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const qualifications = [
  "TripleX tréner — 2023",
  "Aerial jóga oktató — 2017",
  "Medical flossing, kineziotape — 2017",
  "Gerincjóga oktató — 2015",
  "Polar kardiotréner — 2014",
  "Súlyemelő edző — 2013",
  "SFG (StrongFirst Girja) Kettlebell Instruktor — 2012",
  "TRX Sports Medicine edző — 2012",
  "FMS (Functional Movement Systems) — 2011",
  "TRX edző — 2010",
];

const Rolam = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
              Néma <span className="text-gradient">Veronika</span>
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              13 éves korom óta evezek, többszörös korosztályos magyar bajnok, ifjúsági VB 5. helyezett és felnőtt magyar bajnok címet szereztem. 2008 óta tartok kiscsoportos erőnléti edzéseket.
            </p>

            {/* Múlt */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-8">
              <h2 className="font-display text-2xl uppercase font-bold mb-6 text-primary">Múlt</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                1990-ben a családunk barátja levitt evezni. Ott ragadtam, kezdetben csak heti egyszer-kétszer jártam, aztán egyre gyakrabban, végül már iskola előtt reggel 6-kor is eveztem. A kitartó munka mindig meghozza gyümölcsét, másodéves serdülőként az ifik között is nyerni tudtunk! Bekerültem a válogatott keretbe, és az ifjúsági világbajnokságon 5. helyezést értem el.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                A közel 10 év versenysport rengeteg felejthetetlen élménnyel és tapasztalattal gazdagított. A következő években lefoglalt a tanulás, később a család, és csak hobbiból sportoltam.
              </p>
            </div>

            {/* Jelen */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 mb-8">
              <h2 className="font-display text-2xl uppercase font-bold mb-6 text-primary">Jelen</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Mikor kirepültek a gyerekek (bölcsibe, oviba mentek) újra visszatértem az evezős pályára. A felkészülés alatt ismerkedtem meg a kettlebell-el. Néhány hónap múlva elvégeztem az RKC instruktori képzést, és a Baross iskolában elindítottam az első kettlebell csoportot.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                A következő évben Jézuska néhány TRX-et, és egy TRX trainer képzést hozott ajándékba. Egyre több tanítványom lett, állandó problémát jelentett a szabad terem keresés ezért elhatároztam hogy saját mikro-konditermet nyitok.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                2012-ben indultam a CrossFit Open-en, az ott szerzett tapasztalat, izomláz és a 20 év evezős súlyzós edzés inspirálta a Cross Training órát, amin a fekvőtámasztól kezdve az olimpiai rúdig minden szerepel! Megnyertem az első hivatalos magyar Crossfit versenyt. 2015-ben jóga instruktor lettem.
              </p>
            </div>

            {/* Idézet */}
            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8">
              <p className="text-lg italic text-foreground/80 mb-2">
                "Tavaly komoly térdműtétem volt, ez év elején kezdtem el nála rehabilitációs edzéseket a TRX-szel. Ma már nagyon jó edzettséggel bírok, a lábam tökéletes!"
              </p>
              <footer className="text-muted-foreground">— Kriszti</footer>
            </blockquote>

            {/* Végzettségek */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              <h2 className="font-display text-2xl uppercase font-bold mb-6 text-primary">Végzettségek</h2>
              <ul className="space-y-3">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-foreground/90">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Rolam;
