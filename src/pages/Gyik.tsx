import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
  {
    title: "Bejelentkezés",
    items: [
      {
        q: "Miért kell bejelentkezni az edzésekre?",
        a: "Kiscsoportos foglalkozások vannak, egyszerre 6-8-10 fő fér el.",
      },
      {
        q: "Hogy lehet bejelentkezni?",
        a: "Messenger-en, email-ben, vagy Viber-en. Jobb írásban, mert a telefont nem minden esetben tudom felvenni, például ha edzést tartok.",
      },
      {
        q: "Ha rendszeresen járok minden edzésre be kell jelentkeznem?",
        a: "Ha mindig ugyanarra az edzésre jössz, előre be tudom írni az órákat.",
      },
    ],
  },
  {
    title: "Edzés lemondása",
    items: [
      {
        q: "Hogyan lehet lemondani edzést?",
        a: "Az edzéseket előző nap délig lehet lemondani. Messenger-en, email-ben, vagy Viber-en. Ha időben lemondod az edzést akkor jelentkezhetsz helyette egy másikra. Vigyázat a bérlet érvényessége itt is számít!",
      },
      {
        q: "Mi történik ha nem tudom időben lemondani az edzést?",
        a: "Ha tudod, kérlek jelezd akkor is. Sajnos ez az óra elveszik, de lehetőséget biztosítasz másoknak hogy részt vegyenek helyetted. Ha mások is így tesznek, legközelebb esetleg Te tudsz valaki épp megüresedett helyére beugrani.",
      },
      {
        q: "Hogyan tudom pótolni a lemondott órát?",
        a: "Megpróbálunk helyet találni egy másik, neked megfelelő edzésre. Érdemes már a lemondáskor lefoglalni az edzés időpontját. Vigyázat a bérlet érvényessége itt is számít!",
      },
    ],
  },
  {
    title: "Bérlet érvényesség",
    items: [
      {
        q: "Meddig érvényes a bérletem?",
        a: "A bérleted 4 vagy 12 hétig érvényes az első edzés napjától számítva. Lejárhat akkor is ha nem használtad ki az összes edzés lehetőséget.",
      },
      {
        q: "Mi történik, ha időben lemondtam az edzéseket, de nem tudok helyettük jönni?",
        a: "Ez egy nagyon szerencsétlen eset. Ha nem találunk megfelelő időpontot, de később lesz szabad hely (valaki lemondja az edzést) akkor értesítelek! Sajnos ha így sem tudunk helyet találni akkor elveszik az óra.",
      },
    ],
  },
];

const Gyik = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
              GYIK
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Gyakran ismételt kérdések
            </p>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <p className="text-foreground/90 leading-relaxed mb-4">
                A bérlettel kapcsolatban az alábbi négy alapelvet vesszük figyelembe:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>A bérleted 4 vagy 12 hétig érvényes az első edzés napjától számítva.</li>
                <li>Az edzésekre be kell jelentkezned.</li>
                <li>Az edzéseket előző nap délig tudod lemondani.</li>
                <li>Minden alapelvre lehet kivétel a körülmények figyelembe vételével.</li>
              </ol>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
              <h3 className="font-display text-lg uppercase font-semibold mb-4 text-primary">Példa</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Megbízható Mózes</strong> fél éve jár edzésre, lelkiismeretesen ott van az összes órán. Délután derül ki hogy aznap túlóráznia kell, ezért későn tudja lemondani az edzést. Mózes nem veszti el az edzését mert nála ezt kivételként kezelhetjük. ✅
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ámbár Áron</strong> szintén fél éve jár, de sokszor alakul úgy az élete hogy a bejelentkezett edzés helyett moziba, körmöshöz vagy fodrászhoz kell mennie. Áron is későn tudja meg hogy túlóráznia kell, de nála ez nem kivételes eset — és sajnos elveszti az edzését. ❌
              </p>
            </div>

            {faqSections.map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="font-display text-2xl font-bold uppercase mb-4">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${section.title}-${i}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
                    >
                      <AccordionTrigger className="font-display text-sm uppercase tracking-wider hover:no-underline hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <p className="text-muted-foreground text-center mt-12">
              További kérdésed van? <a href="/kapcsolat" className="text-primary hover:underline">Keress bátran!</a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gyik;
