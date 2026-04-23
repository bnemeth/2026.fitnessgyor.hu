import { Phone } from "lucide-react";

const MobileCallBar = () => (
  <a
    href="tel:+36705104440"
    aria-label="Hívj fel"
    className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg shadow-green-700/40 hover:brightness-110 active:scale-95 transition-all"
  >
    <Phone className="w-6 h-6" />
  </a>
);

export default MobileCallBar;
