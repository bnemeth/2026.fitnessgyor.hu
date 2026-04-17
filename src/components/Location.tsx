import { MapPin, Car } from "lucide-react";

const Location = () => {
  return (
    <section id="helyszin" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-12">
          Hely<span className="text-gradient">szín</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl uppercase font-semibold mb-2">Cím</h3>
            <p className="text-muted-foreground">József Attila utca 129, Győr<br />A festékbolt felett, első emelet.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-left">
            <Car className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl uppercase font-semibold mb-2">Parkolás</h3>
            <p className="text-muted-foreground">Parkolni az épület előtt vagy hátul az udvarban lehet. A bemelegítés a lépcsőházban kezdődik! 😄</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.5!2d17.6707257!3d47.6690602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbfeed16819fd:0xd26879e7ceb773d5!2sFITNESS+GY%C5%90R!5e0!3m2!1shu!2shu!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FitnessGyőr helyszín"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
