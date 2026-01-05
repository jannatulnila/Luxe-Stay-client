import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import AboutBuilding from "./components/AboutBuilding";
import Location from "./components/Location";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutBuilding />
      <Location />
    </div>
  );
}
