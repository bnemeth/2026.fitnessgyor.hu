import { Dumbbell, Heart, Zap, StretchHorizontal, Timer, Activity, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Dumbbell,
    title: "Kettlebell",
    slug: "kettlebell",
    description: "Erő és állóképesség növelés régi orosz eszközzel és modern SFG szemlélettel. Egyszerű de hatékony!",
  },
  {
    icon: StretchHorizontal,
    title: "TRX Edzés",
    slug: "trx",
    description: "A nehézségi szintet néhány lépéssel magadnak állíthatod, kőkeményen edzhetsz TRX-el — ha akarod!",
  },
  {
    icon: Heart,
    title: "Jóga",
    slug: "joga",
    description: "A változás belülről kezdődik!",
  },
  {
    icon: Zap,
    title: "Cross Training",
    slug: "cross-training",
    description: "Egyetlen módszer vagy eszköz sem lehet egyedül jobb, mint az összes együtt.",
  },
  {
    icon: Timer,
    title: "Köredzés",
    slug: "koredzes",
    description: "Éld meg a változatosság erejét a köredzéssel.",
  },
  {
    icon: Activity,
    title: "Mobilizáció",
    slug: "mobilizacio",
    description: "Érezd magad könnyedebben és fájdalommentesen minden nap!",
  },
  {
    icon: Wind,
    title: "Kardió",
    slug: "kardio",
    description: "Állóképességi edzés, ha nem szeretsz futni.",
  },
];

const Services = () => {
  return (
    <section id="edzesek" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
          Edzések
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          Olyan edzéseket tartok, amit magam is szívesen csinálok. Ezeket választottam mikor két gyerek után újra edzeni kezdtem, de akkor is része volt a felkészülésemnek amikor Magyar Bajnoki címért eveztem.
        </p>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Számomra is fontos hogy hatékonyak, szórakoztatóak legyenek. Vigyázat! Ez nem azt jelenti könnyű! A fejlődésért, a célokért mindig kicsit szenvedni kell, de az eredmény kárpótol majd!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/edzes/${service.slug}`}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl font-semibold uppercase mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-12 max-w-xl mx-auto">
          Nemtől, kortól, edzettségi szinttől függetlenül mindegy milyen edzést választasz, az a lényeg hogy változatos és számodra szórakoztató legyen!
        </p>
      </div>
    </section>
  );
};

export default Services;
