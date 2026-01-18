import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { VerticalsSection } from "@/components/home/VerticalsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <VerticalsSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
