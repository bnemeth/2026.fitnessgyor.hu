import { useParams, Link } from "react-router-dom";
import { User, Dumbbell, Heart, Zap, StretchHorizontal, Timer, Activity, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getWorkoutBySlug, workouts } from "@/data/workouts";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell, Heart, Zap, StretchHorizontal, Timer, Activity, Wind,
};

const EdzesReszletek = () => {
  const { slug } = useParams<{ slug: string }>();
  const workout = getWorkoutBySlug(slug || "");

  if (!workout) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Edzés nem található</h1>
          <Link to="/edzesek" className="text-primary hover:underline">← Vissza az edzésekhez</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[workout.icon] || Dumbbell;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold uppercase">{workout.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {workout.subtitle}
            </p>

            {workout.quote && (
              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12 max-w-2xl">
                <p className="text-lg italic text-foreground/80 mb-2">"{workout.quote.text}"</p>
                <footer className="text-muted-foreground">— {workout.quote.author}</footer>
              </blockquote>
            )}

            {workout.sections.map((section) => (
              <div key={section.title} className="bg-card border border-border rounded-xl p-8 md:p-12 mb-6">
                <h2 className="font-display text-2xl uppercase font-bold mb-4 text-primary">{section.title}</h2>
                <div className="text-foreground/90 leading-relaxed space-y-4">
                  {section.content.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Edző */}
            <div className="bg-card border border-border rounded-xl p-8 mt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase font-semibold">Az edzést tartja</h3>
                  <Link to="/rolam" className="text-primary font-semibold hover:underline">{workout.trainer}</Link>
                  <p className="text-muted-foreground text-sm">{workout.trainerTitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                A {workout.title.toLowerCase()} edzésekkel kapcsolatos kérdésekkel, időpont egyeztetésért keress személyesen a teremben, a{" "}
                <a href="tel:+36705104440" className="text-primary hover:underline">+36 70 510 44 40</a>-os telefonszámon, email-en, vagy akár a{" "}
                <a href="https://www.facebook.com/fitnessgyor" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>-on.
              </p>
            </div>

            {/* Más edzéstípusok */}
            <div className="mt-8 p-6 bg-card border border-border rounded-xl">
              <h3 className="font-display text-lg uppercase font-semibold mb-4">Más edzéstípusok</h3>
              <div className="flex flex-wrap gap-2">
                {workouts
                  .filter((w) => w.slug !== workout.slug)
                  .map((w) => (
                    <Link
                      key={w.slug}
                      to={`/edzes/${w.slug}`}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-display uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {w.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EdzesReszletek;
