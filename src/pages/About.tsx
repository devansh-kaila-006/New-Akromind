import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Target, Eye, Heart, Users, Globe, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Honest communication and clear expectations always.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Understanding and prioritizing the needs of those we serve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve greater outcomes.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Creating meaningful change in communities and lives.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously evolving our methods and approaches.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        badge="About Us"
        title="One Vision. Many Paths."
        subtitle="New Akromind is more than a company — it's an ecosystem designed to empower individuals and organizations across education, careers, travel, and innovation."
      />

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Tomorrow, Today
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  New Akromind was founded with a singular belief: that personal and professional 
                  growth shouldn't be fragmented across disconnected services. We envisioned a 
                  unified platform where education, career development, exploration, and innovation 
                  come together seamlessly.
                </p>
                <p>
                  Today, our four verticals — AkroTution, AkroPlacement, AkroHolidays, and AkroMind — 
                  represent this vision brought to life. Each vertical is led by domain experts 
                  who share our commitment to excellence and genuine care for every individual we serve.
                </p>
                <p>
                  We've helped thousands of students unlock their potential, guided professionals 
                  to their dream careers, curated unforgettable travel experiences, and partnered 
                  with organizations to drive meaningful innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-akro-tution/20 via-akro-placement/20 to-akro-mind/20 rounded-3xl p-12 lg:p-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-display font-bold text-foreground">10K+</div>
                    <div className="text-muted-foreground">Lives Impacted</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-display font-bold text-foreground">4</div>
                    <div className="text-muted-foreground">Specialized Verticals</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-display font-bold text-foreground">50+</div>
                    <div className="text-muted-foreground">Expert Team Members</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-display font-bold text-foreground">5+</div>
                    <div className="text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-10 shadow-card">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Our Mission
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Empower Every Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class services across education, career development, travel, 
                and consulting that enable individuals and organizations to reach their 
                full potential and create lasting positive impact.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 shadow-card">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Our Vision
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                A Connected Future
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted ecosystem for personal and professional growth, 
                recognized for our innovative approach, exceptional outcomes, and unwavering 
                commitment to every individual we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
