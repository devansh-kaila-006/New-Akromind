import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Plane, Lightbulb } from "lucide-react";

const verticals = [
  {
    id: "akrotution",
    name: "AkroTution",
    tagline: "Learn. Grow. Excel.",
    description: "Comprehensive education programs, skill development courses, and personalized tutoring to unlock your full potential.",
    icon: GraduationCap,
    color: "akro-tution",
    bgClass: "akro-tution-bg",
    textClass: "akro-tution-text",
    path: "/verticals/akrotution",
  },
  {
    id: "akroplacement",
    name: "AkroPlacement",
    tagline: "Your Career. Our Mission.",
    description: "Expert career guidance, job placement assistance, and professional development to land your dream role.",
    icon: Briefcase,
    color: "akro-placement",
    bgClass: "akro-placement-bg",
    textClass: "akro-placement-text",
    path: "/verticals/akroplacement",
  },
  {
    id: "akroholidays",
    name: "AkroHolidays",
    tagline: "Explore. Experience. Escape.",
    description: "Curated travel experiences, holiday packages, and adventure tours to create unforgettable memories.",
    icon: Plane,
    color: "akro-holidays",
    bgClass: "akro-holidays-bg",
    textClass: "akro-holidays-text",
    path: "/verticals/akroholidays",
  },
  {
    id: "akromind",
    name: "AkroMind",
    tagline: "Think. Innovate. Transform.",
    description: "Strategic consulting, innovation workshops, and mindset coaching for individuals and organizations.",
    icon: Lightbulb,
    color: "akro-mind",
    bgClass: "akro-mind-bg",
    textClass: "akro-mind-text",
    path: "/verticals/akromind",
  },
];

export const VerticalsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
            Our Ecosystem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four Verticals, One Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each vertical is designed to address a unique aspect of your personal and professional growth, 
            all unified under the New Akromind philosophy.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <Link
                key={vertical.id}
                to={vertical.path}
                className={`group relative overflow-hidden rounded-2xl p-8 lg:p-10 transition-all duration-300 hover-lift opacity-0 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background */}
                <div className={`absolute inset-0 ${vertical.bgClass} transition-all duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${vertical.textClass} bg-white/80 mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {vertical.name}
                  </h3>
                  <p className={`${vertical.textClass} font-semibold mb-4`}>
                    {vertical.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {vertical.description}
                  </p>

                  {/* Link */}
                  <div className={`inline-flex items-center gap-2 font-semibold ${vertical.textClass} group-hover:gap-3 transition-all duration-300`}>
                    Explore {vertical.name}
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
