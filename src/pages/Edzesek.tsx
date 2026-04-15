import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

const Edzesek = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Schedule />
      </div>
      <Footer />
    </div>
  );
};

export default Edzesek;
