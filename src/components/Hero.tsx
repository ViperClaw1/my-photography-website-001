import { ArrowDown } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Photography hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-[0.4em] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Capturing Life's Moments
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Elena Morgan
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          Fine Art & Portrait Photography
        </p>
        
        <a
          href="#portfolio"
          className="inline-flex items-center gap-3 mt-12 text-sm uppercase tracking-[0.2em] opacity-0 animate-fade-in hover:opacity-80 transition-opacity"
          style={{ animationDelay: "1s" }}
        >
          View Portfolio
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
