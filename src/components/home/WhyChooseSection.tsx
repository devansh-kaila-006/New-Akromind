import { Shield, Users, Target, Zap, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Years of experience across education, careers, travel, and consulting domains.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Tailored solutions designed around your unique goals and circumstances.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Every initiative is measured by tangible outcomes and success metrics.",
  },
  {
    icon: Zap,
    title: "Innovative Methods",
    description: "Modern techniques and cutting-edge tools to deliver superior experiences.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous standards maintained across all services and deliverables.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Partnership",
    description: "We invest in lasting relationships, not just transactions.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
            Why New Akromind
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built Different. Built Better.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What sets us apart is our commitment to excellence, innovation, and genuine care 
            for every individual we serve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/5 text-primary mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
