import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import AboutBuilding from "./components/AboutBuilding";
import Location from "./components/Location";
import FAQSection from "./components/FAQSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <AboutBuilding />
      <FAQSection />
      <Location />
      <Footer />
    </div>
  );
}
