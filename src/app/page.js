import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import AboutBuilding from "./components/AboutBuilding";
import Location from "./components/Location";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutBuilding />
      <FAQSection />
      <Location />
    </div>
  );
}
