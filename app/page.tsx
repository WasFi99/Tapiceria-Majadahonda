import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { BudgetCalculator } from "@/components/features/BudgetCalculator";
import { TrustSignals } from "@/components/sections/TrustSignals";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-white">
      <Header />
      <Hero />
      <TrustSignals />
      <ServiceGrid />
      <BeforeAfterSlider />
      <BudgetCalculator />
      {/* Footer and other sections to follow */}
    </main>
  );
}
