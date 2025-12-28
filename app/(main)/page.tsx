import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BudgetCalculator } from "@/components/features/BudgetCalculator";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ContactForm } from "@/components/features/ContactForm";
import dynamic from "next/dynamic";

// Lazy load heavy slider component to reduce initial bundle
const BeforeAfterSlider = dynamic(
  () => import("@/components/features/BeforeAfterSlider").then(mod => mod.BeforeAfterSlider),
  { ssr: false, loading: () => <div className="h-[400px] bg-stone-100 animate-pulse rounded-2xl" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-white">
      <Header />
      <Hero />
      <TrustSignals />
      <ServiceGrid />
      <BeforeAfterSlider />
      <BudgetCalculator />
      <ContactForm />
    </main>
  );
}
