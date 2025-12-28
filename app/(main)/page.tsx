import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

// Lazy load below-fold components
const BeforeAfterSlider = dynamic(
  () => import("@/components/features/BeforeAfterSlider").then(mod => ({ default: mod.BeforeAfterSlider })),
  { ssr: true }
);

const BudgetCalculator = dynamic(
  () => import("@/components/features/BudgetCalculator").then(mod => ({ default: mod.BudgetCalculator })),
  { ssr: true }
);

const ContactForm = dynamic(
  () => import("@/components/features/ContactForm").then(mod => ({ default: mod.ContactForm })),
  { ssr: true }
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
