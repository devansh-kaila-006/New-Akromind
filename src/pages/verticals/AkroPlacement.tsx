import { Layout } from "@/components/layout/Layout";
import { VerticalPageTemplate } from "@/components/shared/VerticalPageTemplate";
import { Briefcase } from "lucide-react";

const AkroPlacement = () => {
  return (
    <Layout>
      <VerticalPageTemplate
        name="AkroPlacement"
        tagline="Your Career. Our Mission."
        description="Expert career guidance, strategic job placement assistance, and comprehensive professional development to help you land your dream role and build a fulfilling career."
        icon={Briefcase}
        bgClass="akro-placement-bg"
        textClass="akro-placement-text"
        features={[
          {
            title: "Career Counseling",
            description: "In-depth assessments and personalized guidance to identify your ideal career path based on skills and aspirations.",
          },
          {
            title: "Resume & Profile Building",
            description: "Professional resume crafting, LinkedIn optimization, and personal branding to make you stand out.",
          },
          {
            title: "Interview Preparation",
            description: "Mock interviews, feedback sessions, and coaching to help you ace any interview with confidence.",
          },
          {
            title: "Job Matching & Placement",
            description: "Direct connections with our network of hiring partners across industries and locations.",
          },
          {
            title: "Internship Programs",
            description: "Curated internship opportunities for students and freshers to gain real-world experience.",
          },
          {
            title: "Career Transition Support",
            description: "Specialized guidance for professionals looking to switch industries or roles.",
          },
        ]}
        benefits={[
          "Access to exclusive job opportunities",
          "Industry-experienced career counselors",
          "End-to-end placement support",
          "High success rate in placements",
          "Post-placement follow-up and support",
          "Connections with 500+ hiring partners",
        ]}
        targetAudience={[
          "Fresh graduates entering the job market",
          "Professionals seeking career advancement",
          "Individuals planning career transitions",
          "Students looking for internships",
          "Organizations seeking recruitment partners",
        ]}
        ctaText="Kickstart Your Career"
      />
    </Layout>
  );
};

export default AkroPlacement;
