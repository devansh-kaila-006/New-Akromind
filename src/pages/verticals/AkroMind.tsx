import { Layout } from "@/components/layout/Layout";
import { VerticalPageTemplate } from "@/components/shared/VerticalPageTemplate";
import { Lightbulb } from "lucide-react";

const AkroMind = () => {
  return (
    <Layout>
      <VerticalPageTemplate
        name="AkroMind"
        tagline="Think. Innovate. Transform."
        description="Strategic consulting, innovation workshops, and mindset coaching to help individuals and organizations unlock breakthrough thinking and achieve transformational growth."
        icon={Lightbulb}
        bgClass="akro-mind-bg"
        textClass="akro-mind-text"
        features={[
          {
            title: "Strategic Consulting",
            description: "Expert advisory services to help businesses navigate challenges and seize opportunities.",
          },
          {
            title: "Innovation Workshops",
            description: "Hands-on sessions to foster creativity, design thinking, and problem-solving skills.",
          },
          {
            title: "Executive Coaching",
            description: "One-on-one coaching for leaders looking to enhance their effectiveness and impact.",
          },
          {
            title: "Mindset Development",
            description: "Programs focused on growth mindset, resilience, and peak performance habits.",
          },
          {
            title: "Digital Transformation",
            description: "Guidance on leveraging technology to modernize operations and create competitive advantage.",
          },
          {
            title: "Startup Mentorship",
            description: "Comprehensive support for entrepreneurs from ideation to scaling.",
          },
        ]}
        benefits={[
          "Experienced consultants with diverse industry backgrounds",
          "Practical, implementation-focused recommendations",
          "Customized solutions for unique challenges",
          "Long-term partnership approach",
          "Measurable outcomes and ROI tracking",
          "Access to a network of experts and resources",
        ]}
        targetAudience={[
          "Business owners seeking strategic direction",
          "Executives looking for leadership development",
          "Startups needing guidance and mentorship",
          "Organizations pursuing innovation",
          "Individuals seeking personal growth and mindset shifts",
        ]}
        ctaText="Transform Your Vision"
      />
    </Layout>
  );
};

export default AkroMind;
