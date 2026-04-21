import { Calendar, Users, Dumbbell, StretchHorizontal, Heart, Zap, Timer, Activity, Wind, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ScheduleEntry = {
  name: string;
  time: string;
};

const schedule: Record<string, ScheduleEntry[]> = {
  Hétfő: [
    { name: "Kettlebell", time: "8:00–9:00" },
    { name: "Kardió", time: "9:00–10:00" },
    { name: "Kettlebell", time: "16:50–17:50" },
    { name: "TRX", time: "17:50–18:50" },
    { name: "Kettlebell", time: "19:00–20:00" },
    { name: "Cross Training", time: "20:00–21:00" },
  ],
  Kedd: [
    { name: "Cross Training", time: "8:00–9:00" },
    { name: "Mobilizáció", time: "9:00–10:00" },
    { name: "Kardió", time: "16:50–17:50" },
    { name: "TRX", time: "17:50–18:50" },
    { name: "Kettlebell", time: "19:00–20:00" },
  ],
  Szerda: [
    { name: "TRX", time: "8:00–9:00" },
    { name: "Kettlebell", time: "9:00–10:00" },
    { name: "TRX", time: "16:50–17:50" },
    { name: "Köredzés", time: "17:50–18:50" },
    { name: "Kettlebell", time: "19:00–20:00" },
    { name: "Jóga", time: "20:00–21:00" },
  ],
  Csütörtök: [
    { name: "Cross Training", time: "8:00–9:00" },
    { name: "Kettlebell", time: "16:50–17:50" },
    { name: "TRX", time: "17:50–18:50" },
    { name: "Kettlebell", time: "19:00–20:00" },
  ],
  Péntek: [
    { name: "Mobilizáció", time: "8:00–9:00" },
    { name: "Kettlebell", time: "9:00–10:00" },
    { name: "Cross Training", time: "18:00–19:00" },
    { name: "Mobilizáció", time: "19:00–20:00" },
  ],
};

const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];

// Ha egy óra kicsit eltérő időpontban kezdődik, melyik sorba essen
const slotAliases: Record<string, string> = {
  "18:00–19:00": "17:50–18:50",
};

// All unique time slots in order, with optional separator before slot
const timeSlots: { slot: string; separator?: string }[] = [
  { slot: "8:00–9:00" },
  { slot: "9:00–10:00" },
  { slot: "16:50–17:50", separator: "Délután" },
  { slot: "17:50–18:50" },
  { slot: "19:00–20:00" },
  { slot: "20:00–21:00" },
];

const nameToSlug: Record<string, string> = {
  Kettlebell: "kettlebell",
  Kardió: "kardio",
  TRX: "trx",
  "Cross Training": "cross-training",
  Mobilizáció: "mobilizacio",
  Köredzés: "koredzes",
  Jóga: "joga",
};

const nameToIcon: Record<string, LucideIcon> = {
  Kettlebell: Dumbbell,
  Kardió: Wind,
  TRX: StretchHorizontal,
  "Cross Training": Zap,
  Mobilizáció: Activity,
  Köredzés: Timer,
  Jóga: Heart,
};

const WorkoutIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = nameToIcon[name];
  return Icon ? <Icon className={className} /> : null;
};

const Schedule = () => {
  return (
    <section id="idopontok" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-4">
          Órarend
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Az időpont nem lehet akadály! Hétfőtől péntekig több mint 25 edzést tartok,
          ezért mindig találhatsz számodra megfelelőt délelőtt és délután is!
        </p>

        {/* Desktop: 5 columns, Mobile: stacked */}
        <div className="hidden md:grid grid-cols-5 gap-3">
          {days.map((day) => (
            <div key={day} className="flex flex-col gap-1.5">
              <h3 className="font-display text-lg uppercase font-bold text-center py-3 bg-primary text-primary-foreground rounded-t-lg">
                {day}
              </h3>
              {timeSlots.map(({ slot, separator }) => {
                const entry = schedule[day].find((e) => e.time === slot || slotAliases[e.time] === slot);
                return (
                  <div key={slot} className={separator ? "mt-8" : ""}>
                    {entry ? (
                      <Link
                        to={nameToSlug[entry.name] ? `/edzes/${nameToSlug[entry.name]}` : "#"}
                        className="flex items-center gap-2 h-14 bg-card border border-border rounded-lg px-3 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        <WorkoutIcon name={entry.name} className="w-4 h-4 text-primary shrink-0" />
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="font-display text-sm uppercase font-semibold leading-tight truncate">{entry.name}</p>
                          <p className="text-muted-foreground text-xs">{entry.time}</p>
                        </div>
                      </Link>
                    ) : (
                      <div className="h-14 rounded-lg border border-dashed border-border/40" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile: stacked days */}
        <div className="md:hidden space-y-6">
          {days.map((day) => (
            <div key={day}>
              <h3 className="font-display text-lg uppercase font-bold py-3 px-4 bg-primary text-primary-foreground rounded-t-lg">
                {day}
              </h3>
              <div className="border border-border border-t-0 rounded-b-lg divide-y divide-border">
                {schedule[day].map((entry, i) => {
                  const slug = nameToSlug[entry.name];
                  return (
                    <Link
                      key={i}
                      to={slug ? `/edzes/${slug}` : "#"}
                      className="flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors"
                    >
                      <span className="flex items-center gap-2 font-display text-sm uppercase font-semibold">
                        <WorkoutIcon name={entry.name} className="w-4 h-4 text-primary shrink-0" />
                        {entry.name}
                      </span>
                      <span className="text-muted-foreground text-sm">{entry.time}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl uppercase font-semibold mb-2">Hétfő – Péntek</h3>
            <p className="text-muted-foreground">Több mint 25 edzés hetente, délelőtt és délután is.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl uppercase font-semibold mb-2">Kis csoportok</h3>
            <p className="text-muted-foreground">6-10 fős foglalkozások, bejelentkezés szükséges. Ez az első lépés a formába hozáshoz!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
