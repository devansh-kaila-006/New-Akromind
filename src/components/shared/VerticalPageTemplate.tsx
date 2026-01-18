import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface VerticalPageProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  bgClass: string;
  textClass: string;
  features: Feature[];
  benefits: string[];
  targetAudience: string[];
  ctaText: string;
}

export const VerticalPageTemplate = ({
  name,
  tagline,
  description,
  icon: Icon,
  bgClass,
  textClass,
  features,
  benefits,
  targetAudience,
  ctaText,
}: VerticalPageProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8 animate-fade-up opacity-0`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up opacity-0 stagger-1">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 animate-fade-up opacity-0 stagger-2">
              {tagline}
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 h-12"
              >
                <Link to="/contact">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(210 20% 98%)"
            />
          </svg>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${bgClass} rounded-2xl p-8 hover-lift opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Benefits */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Who It's For */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Target Audience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Who It's For
              </h2>
              <ul className="space-y-4">
                {targetAudience.map((audience, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-shrink-0 p-1 rounded-full ${textClass} bg-white`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-muted-foreground">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-shrink-0 p-1 rounded-full ${textClass} bg-white`}>
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className={`relative overflow-hidden rounded-3xl ${bgClass} p-12 md:p-16 lg:p-20`}>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Get Started with {name}?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Take the first step towards your goals. Our team is ready to help you succeed.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12"
              >
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
