import GamingSection from "@/components/GamingSection";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="bg-bg_base flex flex-col gap-0  ">
      <div className="px-[20px] lg:px-[120px] ">
        <NavBar />
        <Hero />
      </div>
      <GamingSection />
      <Sponsors />
      <Pricing />
      <Footer />
    </div>
  );
}
