import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Shield, Users, Target, Zap, Award, HeartHandshake, CheckCircle, TrendingUp, Clock, Globe } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Our team brings years of hands-on experience across education, career consulting, travel, and innovation. We don't just advise — we deliver.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "No one-size-fits-all solutions here. Every strategy, program, and recommendation is tailored to your unique goals and circumstances.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "We measure success by your outcomes. Whether it's grades, job offers, unforgettable trips, or business growth — results matter.",
  },
  {
    icon: Zap,
    title: "Innovative Methods",
    description: "We leverage modern technology, fresh methodologies, and cutting-edge tools to deliver superior experiences across all verticals.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous standards are maintained across all our services. We're committed to excellence in every interaction and deliverable.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    description: "We invest in relationships, not transactions. Many of our clients have been with us for years, and that's by design.",
  },
];

const stats = [
  { icon: CheckCircle, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "10K+", label: "Success Stories" },
  { icon: Clock, value: "5+", label: "Years of Excellence" },
  { icon: Globe, value: "50+", label: "Destinations Covered" },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      <PageHero
        badge="Why Us"
        title="Built Different. Built Better."
        subtitle="We're not just another service provider. We're your partners in growth, committed to your success across every dimension."
      />

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
              The Akromind Difference
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover why thousands of individuals and organizations trust New Akromind 
              for their most important journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Promise to You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At New Akromind, we believe in transparency, accountability, and going the extra mile. 
              When you choose us, you're not just getting a service — you're gaining a dedicated 
              partner committed to your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-akro-tution-light rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">Clear Communication</h4>
                <p className="text-sm text-muted-foreground">Regular updates, honest feedback, and open dialogue at every step.</p>
              </div>
              <div className="bg-akro-placement-light rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">Dedicated Support</h4>
                <p className="text-sm text-muted-foreground">Responsive team ready to assist you whenever you need help.</p>
              </div>
              <div className="bg-akro-mind-light rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">Continuous Improvement</h4>
                <p className="text-sm text-muted-foreground">We constantly evolve our methods based on feedback and results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
