import Image from "next/image";
import HeroBanner from "./components/Home/HeroBanner";
import AboutBuilding from "./components/Home/AboutBuilding";
import Location from "./components/Home/Location";
import FAQSection from "./components/Home/FAQSection";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

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
