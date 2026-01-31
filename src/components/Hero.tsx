
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-pulse-slow"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/hero-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-primary font-bold tracking-[0.5em] text-sm md:text-lg mb-6 animate-fade-in uppercase">
          Manhattan's Premier Nightlife Destination
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white font-syncopate tracking-tighter mb-8 leading-none mix-blend-overlay">
          PRISM
        </h1>
        <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
          Experience the spectrum of sound. A sensory masterpiece in the heart of NYC where luxury meets the underground.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-black hover:bg-primary/80 min-w-[200px] uppercase tracking-widest text-xs font-bold h-12">
            View Calendar
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black min-w-[200px] uppercase tracking-widest text-xs font-bold h-12">
            VIP Inquiry
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
