interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  accentClass?: string;
}

export const PageHero = ({ title, subtitle, badge, accentClass }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden hero-gradient py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white animate-fade-up opacity-0 ${accentClass || ''}`}>
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up opacity-0 stagger-1">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-up opacity-0 stagger-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};
