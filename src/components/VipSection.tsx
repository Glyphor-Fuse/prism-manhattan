
import { Button } from "@/components/ui/button";

const VipSection = () => {
  return (
    <section id="vip" className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter leading-none">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Night</span>
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Experience Prism from the best seats in the house. Our VIP table service offers exclusive entry, premium bottle selections, and a private host to ensure your night is flawless.
          </p>

          <ul className="space-y-4 text-white/80">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span className="uppercase tracking-wider text-sm">Expedited VIP Entry</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span className="uppercase tracking-wider text-sm">Elevated Private Seating</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span className="uppercase tracking-wider text-sm">Dedicated Server & Security</span>
            </li>
          </ul>

          <Button className="bg-amber-500 text-black hover:bg-amber-400 rounded-none px-12 py-8 text-sm tracking-[0.2em] font-bold uppercase mt-8 w-full md:w-auto">
            Request Table
          </Button>
        </div>

        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-white/10">
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/vip-bottle-service.png" 
              alt="VIP Experience" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipSection;
