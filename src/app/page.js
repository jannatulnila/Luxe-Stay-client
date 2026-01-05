import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import AboutBuilding from "./components/AboutBuilding";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutBuilding />
    </div>
  );
}
