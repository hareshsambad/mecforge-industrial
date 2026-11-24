import { HeroSection } from "@/components/home/HeroSection";
import { MetricsBar } from "@/components/home/MetricsBar";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessTeaserSection } from "@/components/home/ProcessTeaserSection";
import { ConversionBanner } from "@/components/home/ConversionBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <PillarsSection />
      <ProcessTeaserSection />
      <ConversionBanner />
    </>
  );
}
