export type WorkoutSection = {
  title: string;
  content: string;
};

export type Workout = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  quote?: { text: string; author: string };
  sections: WorkoutSection[];
  trainer: string;
  trainerTitle: string;
};

export const workouts: Workout[] = [
  {
    slug: "kettlebell",
    title: "Kettlebell",
    subtitle: "Rendőrök, katonák, súlyemelő és birkózó olimpikonok, MMA harcosok választották a kettlebell-t, Neked is tetszeni fog ha szereted a kemény edzéseket!",
    description: "Erő és állóképesség növelés régi orosz eszközzel és modern SFG szemlélettel.",
    icon: "Dumbbell",
    quote: { text: "16 kilós súlyt nem szabad venni, olyan mint a gyerekcipő: gyorsan kinövöd!", author: "Dávid Laci" },
    sections: [
      {
        title: "Mire jó a Kettlebell?",
        content: "Peti 12 kilós kettlebellel kezdte az első órán, másfél év múlva elvenni sem tudtam tőle a 28-asat! Ha fogyni, formálódni szeretnél ugyanúgy megtalálhatod a számításod! A gyakorlatok helyes és biztonságos elsajátítása kb. 3 hónap, ezt az időszakot mindenképp érdemes SFG edzővel tölteni, utána meg a társaság miatt...",
      },
      {
        title: "Mi az a Kettlebell?",
        content: "A Kettlebell vagy másnéven Girya egy tradicionális orosz vas súlyzó, ami leginkább egy olyan ágyúgolyóra hasonlít, amelyhez egy bőrönd fogantyúját erősítették. Az első Kettlebell eszközök a takarmány mérésére szolgáltak. Parasztok és mezőgazdasági munkások használták, és erejük vitán felül megnövekedett. Idővel a tapasztalatok alapján egyre rendszerezettebb lett a használat módja. Később a Kettlebelleket párjával kezdték el használni, közéjük rúdat illesztettek, a fogantyút eltávolították, és máris megérkeztünk a manapság használt súlyzók őséhez. Tették mindezt azért, hogy versenyeket rendezhessenek. A nevet is megváltoztatták, hiszen míg az angol nyelvben a Kettlebell a súly harangnyelv alakjára utal, addig az így nyert páros súlyzókat, mivel már nem lehetett volna harangnyelvként használni, néma harangnak, tehát dumbbell-nek nevezték, és nevezik mai is angol nyelvterületen.",
      },
      {
        title: "Milyen egy Kettlebell edzés?",
        content: "A kettlebell edzéseken senki sem marad le!",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "SFG Instruktor",
  },
  {
    slug: "trx",
    title: "TRX Edzés",
    subtitle: "Használd a tested a gépek helyett!",
    description: "A funkcionális tréning a fitnesz hazájában, az Egyesült Államokban már óriási népszerűségnek örvend. Ennek számos oka van – minimális eszköz és helyigény, látványos eredmények, széleskörű felhasználás – de ami talán mindennél jobban alátámasztja a létjogosultságát az a szemléletmód, amivel megközelíti a testmozgást.",
    icon: "StretchHorizontal",
    quote: { text: "Talán azért lányos edzés, mert a kettlebellel ellentétben itt puha a fogantyú...", author: "Vera" },
    sections: [
      {
        title: "Mire jó a TRX?",
        content: "A testet és az izmokat a mindennapi élet kihívásaira készíti fel, nem az izomépítés a lényeg, hanem a kiegyensúlyozott, stabil és terhelhető teljes izomzat. A módszer a test természetes képességeit erősíti és emeli ki. A funkcionális tréning másik alapvető sajátossága, hogy középpontba helyezi az úgynevezett 'core' izmok fejlesztését, mely izomcsoport a testünk erőközpontja és gerincünk stabilizálásában is alapvető fontosságú.",
      },
      {
        title: "Mi a TRX?",
        content: "A TRX sikere egyszerűségében és hatékonyságában rejlik. A 70 dkg-os heveder-rendszer lényegében egy mobil edzőterem, amit bárhova magaddal tudsz vinni és bárhol tudod használni. A TRX-szel végtelen számú gyakorlat végezhető és az egész testet meg lehet vele mozgatni.",
      },
      {
        title: "Milyen egy TRX edzés?",
        content: "A TRX-es edzésnél a saját testünket használjuk ellenállásként és az intenzitást is mi magunk határozzuk meg, így lehetséges, hogy ugyanazt az eszközt használja egy elit katona és egy modell is. Egy TRX-es edzés sokkal intenzívebb, mint egy cardio edzés, sokkal több kalóriát égetünk el rövidebb idő alatt és az anyagcserét is annyira felpörgeti, hogy az edzés utáni regenerációra (a szervezetünk visszaállása az egyensúlyi állapotba) legalább annyi kalóriát égetünk el, mint edzés közben. Egy zsírégető cardio edzés utóégető hatása ehhez képest minimális.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "TRX Sports Medicine Trainer",
  },
  {
    slug: "joga",
    title: "Jóga",
    subtitle: "A jóga ősi eredetű, holisztikus testi és szellemi gyakorlat, amely Indiából származik.",
    description: "A változás belülről kezdődik!",
    icon: "Heart",
    sections: [
      {
        title: "Mire jó a jóga?",
        content: "A jóga segít a test erősítésében és a rugalmasság növelésében, ami javítja az általános fizikai egészséget. A rendszeres gyakorlás során az izmok megerősödnek, az ízületek mozgástartománya nő, és ezáltal csökken a sérülések kockázata.",
      },
      {
        title: "Mi az a jóga?",
        content: "Az ászanák (testhelyzetek), a pránájáma (légzéstechnikák) és a meditáció alkotják a jóga fő összetevőit, és ezek segítenek a test erősítésében, a rugalmasság növelésében, a stressz csökkentésében és a mentális egyensúly elérésében.",
      },
      {
        title: "Milyen egy jóga foglalkozás?",
        content: "Nagyon nehezen találom ki ezeket a leírásokat, általában edzek inkább helyette.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "Gerincjóga oktató",
  },
  {
    slug: "cross-training",
    title: "Cross Training",
    subtitle: "Egyetlen módszer vagy eszköz sem lehet egyedül jobb mint az összes együtt.",
    description: "Egyetlen módszer vagy eszköz sem lehet egyedül jobb, mint az összes együtt.",
    icon: "Zap",
    quote: { text: "Vera a tegnapi foglalkozás elérte célját! Most már én is lassan tudok csak guggolást csinálni!", author: "Csapó Balázs" },
    sections: [
      {
        title: "Mire jó a Cross Training?",
        content: "Még nem készült ez a bemutató, mert mindig inkább edzek az írás helyett.",
      },
      {
        title: "Mi az a Cross Training?",
        content: "Az összes módszer kicsit túlzás, de mindent bevethetünk ami a kezünk ügyébe kerül: kettlebell, medicin labda, gyűrű, TRX, súlyzó rúd, ugrálókötél, dobozok, és sokszor még eszköz sem kell egy jó kis izomlázhoz.",
      },
      {
        title: "Milyen egy Cross Training edzés?",
        content: "Nagyon nehezen találom ki ezeket a leírásokat, általában edzek inkább helyette.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "Súlyemelő edző",
  },
  {
    slug: "koredzes",
    title: "Köredzés",
    subtitle: "Ez a dinamikus edzésforma változatosságot, erőt és kitartást kínál, sohasem unalmas!",
    description: "Éld meg a változatosság erejét a köredzéssel.",
    icon: "Timer",
    sections: [
      {
        title: "Mire jó a köredzés?",
        content: "Segít erősíteni az izmokat és növelni az állóképességet.",
      },
      {
        title: "Mi az a köredzés?",
        content: "A köredzés kiváló módja a teljes test edzésének, mivel változatos gyakorlatokból áll, amelyeket több körben hajtasz végre. A gyakorlatok lehetnek testtömeges gyakorlatok, súlyzós gyakorlatok vagy kombinált gyakorlatok is. A köredzés célja az erő, állóképesség, és/vagy izomtömeg növelése.",
      },
      {
        title: "Milyen egy köredzés?",
        content: "A köredzés egy edzésforma, amely számos különböző gyakorlatot tartalmaz, amelyeket egymás után végzel el több körben.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "Súlyemelő edző",
  },
  {
    slug: "mobilizacio",
    title: "Mobilizáció",
    subtitle: "A mobilizációs gyakorlatok célja a mozgástartomány növelése, az izmok rugalmasságának fokozása és az ízületek felkészítése a terhelésre.",
    description: "Érezd magad könnyedebben és fájdalommentesen minden nap!",
    icon: "Activity",
    sections: [
      {
        title: "Mire jó a mobilizáció?",
        content: "A mobilizációs gyakorlatok nagyszerűen hozzájárulnak az izmok rugalmasságának növeléséhez. Rendszeres gyakorlásuk révén javulhat a mozgástartomány, így könnyebben elérhetők a kívánt testmozgási célok. Segít megelőzni a sérüléseket, különösen a túlterheléses sérüléseket, valamint növeli a testmozgás hatékonyságát és kényelmét.",
      },
      {
        title: "Mi az a mobilizáció?",
        content: "A mobilizációs edzés olyan gyakorlatok sorozatát jelenti, amelyek célja az ízületek és izmok mozgástartományának növelése, az izomfeszültség oldása és az izmok rugalmasságának javítása. Az ilyen típusú edzés nem azonos a statikus nyújtással, mivel aktív mozgással és dinamikus gyakorlatokkal kombinálja az izomlazítást és az ízületi munkát.",
      },
      {
        title: "Milyen egy mobilizáció edzés?",
        content: "Nagyon nehezen találom ki ezeket a leírásokat, általában edzek inkább helyette.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "Gerincjóga oktató",
  },
  {
    slug: "kardio",
    title: "Kardió",
    subtitle: "Ha a célunk a zsírégetés és az alakformálás, akkor a kardió edzés kiváló választás lehet. A pulzusszámunk emelésével gyorsan elégethetjük a felesleges kalóriákat.",
    description: "Állóképességi edzés, ha nem szeretsz futni.",
    icon: "Wind",
    sections: [
      {
        title: "Mire jó a kardió?",
        content: "A kardió edzés kiválóan alkalmas a testsúlykontrollra és a zsírégetésre. Megemeli a pulzusszámot és segít elégetni kalóriákat, így hozzájárul a fogyáshoz vagy a testsúly fenntartásához. Kardió edzés során felszabaduló endorfinok segítenek javítani a hangulatot és csökkenteni a stresszt. Emellett növeli az energiaszintet, ami segít a mindennapi tevékenységek könnyebb elvégzésében.",
      },
      {
        title: "Mi az a kardió edzés?",
        content: "A kardió edzés egy olyan mozgásforma, amelynek célja a szív- és érrendszeri teljesítmény javítása, valamint az állóképesség növelése. A kardió edzés során az emberi test megnövelt oxigénigény mellett működik. Az ilyen típusú edzés során a szív- és tüdőrendszer dolgozik összehangoltan, hogy megfelelő mennyiségű oxigént juttasson el az izmokhoz.",
      },
      {
        title: "Milyen egy kardió edzés?",
        content: "Nagyon nehezen találom ki ezeket a leírásokat, általában edzek inkább helyette.",
      },
    ],
    trainer: "Néma Veronika",
    trainerTitle: "Polar kardiotréner",
  },
];

export function getWorkoutBySlug(slug: string): Workout | undefined {
  return workouts.find((w) => w.slug === slug);
}

export function getWorkoutByName(name: string): Workout | undefined {
  const normalized = name.toLowerCase();
  return workouts.find(
    (w) =>
      w.title.toLowerCase() === normalized ||
      w.slug === normalized
  );
}
