import { CheckCircle, AlertTriangle, Droplets } from "lucide-react";

const Equipment = () => {
  return (
    <section id="felszereles" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-center mb-12">
          Felszerelés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <CheckCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase font-semibold mb-2">Eszközök biztosítva</h3>
            <p className="text-muted-foreground text-sm">Minden eszköz rendelkezésre áll, nincs szükség saját kettlebell-re vagy TRX-re.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <Droplets className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase font-semibold mb-2">Folyadékpótlás</h3>
            <p className="text-muted-foreground text-sm">Hozz vizet vagy izotóniás italt — az elveszített folyadékot gyorsan pótolni kell.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <AlertTriangle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-lg uppercase font-semibold mb-2">Ékszerek nélkül</h3>
            <p className="text-muted-foreground text-sm">Gyűrű, nyaklánc viselése veszélyes edzés közben. Inkább hagyd otthon!</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 text-center max-w-lg mx-auto">
          <p className="text-muted-foreground">
            Kényelmes sportruha és lapostalpú cipő — ennyi kell. Minden más eszköz a teremben van!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
