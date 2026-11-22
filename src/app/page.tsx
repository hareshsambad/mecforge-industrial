import { HeroSection } from "@/components/home/HeroSection";
import { MetricsBar } from "@/components/home/MetricsBar";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ManufacturingModesSection } from "@/components/home/ManufacturingModesSection";
import { ProcessTeaserSection } from "@/components/home/ProcessTeaserSection";
import { QualitySpotlightSection } from "@/components/home/QualitySpotlightSection";
import { ConversionBanner } from "@/components/home/ConversionBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <PillarsSection />
      <ManufacturingModesSection />
      <ProcessTeaserSection />
      <QualitySpotlightSection />
      <ConversionBanner />
    </>
  );
}
