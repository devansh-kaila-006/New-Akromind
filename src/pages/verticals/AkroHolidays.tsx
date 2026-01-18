import { Layout } from "@/components/layout/Layout";
import { VerticalPageTemplate } from "@/components/shared/VerticalPageTemplate";
import { Plane } from "lucide-react";

const AkroHolidays = () => {
  return (
    <Layout>
      <VerticalPageTemplate
        name="AkroHolidays"
        tagline="Explore. Experience. Escape."
        description="Curated travel experiences, exciting holiday packages, and adventure tours designed to create unforgettable memories while you explore the world."
        icon={Plane}
        bgClass="akro-holidays-bg"
        textClass="akro-holidays-text"
        features={[
          {
            title: "Domestic Tours",
            description: "Explore India's incredible diversity with carefully planned trips to popular and offbeat destinations.",
          },
          {
            title: "International Packages",
            description: "Hassle-free international travel with visa assistance, curated itineraries, and local experiences.",
          },
          {
            title: "Adventure Travel",
            description: "Thrilling adventures including trekking, scuba diving, paragliding, and wildlife safaris.",
          },
          {
            title: "Corporate Retreats",
            description: "Team-building trips and corporate offsites designed to boost morale and productivity.",
          },
          {
            title: "Customized Itineraries",
            description: "Tailor-made travel plans based on your preferences, budget, and schedule.",
          },
          {
            title: "Group Tours",
            description: "Join like-minded travelers on curated group experiences led by experienced guides.",
          },
        ]}
        benefits={[
          "Best-in-class pricing and value",
          "24/7 travel support during trips",
          "Verified accommodations and transport",
          "Local experiences and hidden gems",
          "Flexible booking and cancellation policies",
          "Experienced travel consultants",
        ]}
        targetAudience={[
          "Families planning vacations",
          "Adventure enthusiasts seeking thrills",
          "Corporate teams planning retreats",
          "Solo travelers exploring new destinations",
          "Couples looking for romantic getaways",
        ]}
        ctaText="Plan Your Trip"
      />
    </Layout>
  );
};

export default AkroHolidays;
