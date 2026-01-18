import { Layout } from "@/components/layout/Layout";
import { VerticalPageTemplate } from "@/components/shared/VerticalPageTemplate";
import { GraduationCap } from "lucide-react";

const AkroTution = () => {
  return (
    <Layout>
      <VerticalPageTemplate
        name="AkroTution"
        tagline="Learn. Grow. Excel."
        description="Comprehensive education programs, skill development courses, and personalized tutoring designed to unlock your full academic and professional potential."
        icon={GraduationCap}
        bgClass="akro-tution-bg"
        textClass="akro-tution-text"
        features={[
          {
            title: "Personalized Tutoring",
            description: "One-on-one sessions tailored to your learning style and pace, ensuring maximum understanding and retention.",
          },
          {
            title: "Skill Development Programs",
            description: "Industry-relevant courses in technology, communication, leadership, and more to boost your professional profile.",
          },
          {
            title: "Exam Preparation",
            description: "Intensive coaching for competitive exams, board exams, and entrance tests with proven success strategies.",
          },
          {
            title: "Online Learning",
            description: "Flexible digital courses and live sessions accessible from anywhere, at any time that suits you.",
          },
          {
            title: "Corporate Training",
            description: "Customized training programs for organizations looking to upskill their workforce.",
          },
          {
            title: "Mentorship Programs",
            description: "Long-term guidance from industry experts to help you navigate your educational and career journey.",
          },
        ]}
        benefits={[
          "Expert instructors with proven track records",
          "Flexible learning schedules to fit your lifestyle",
          "Progress tracking and regular assessments",
          "Small batch sizes for personalized attention",
          "Access to comprehensive study materials",
          "Career-oriented curriculum design",
        ]}
        targetAudience={[
          "Students preparing for competitive exams",
          "Professionals seeking skill upgrades",
          "Corporate teams needing training programs",
          "Parents looking for quality tutoring for their children",
          "Individuals pursuing lifelong learning",
        ]}
        ctaText="Start Learning Today"
      />
    </Layout>
  );
};

export default AkroTution;
