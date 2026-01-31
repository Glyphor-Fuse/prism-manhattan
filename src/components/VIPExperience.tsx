
import { Button } from "@/components/ui/button";

const VIPExperience = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/30 z-0 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative z-10 h-[600px] w-full overflow-hidden bg-zinc-900">
               <img 
                 src="https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/vip-lounge.jpg" 
                 alt="VIP Service" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Exclusive Access
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white font-syncopate leading-tight">
              ELEVATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">NIGHT</span>
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Ascend to the mezzanine for an unparalleled view of the energy below. Our VIP table service offers expedited entry, private seating, and a dedicated team to curate your perfect evening.
            </p>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="h-px w-6 bg-primary" />
                <span className="uppercase tracking-widest text-sm">Priority Entry</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-px w-6 bg-primary" />
                <span className="uppercase tracking-widest text-sm">Premium Bottle Service</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-px w-6 bg-primary" />
                <span className="uppercase tracking-widest text-sm">Private Security</span>
              </li>
            </ul>

            <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 uppercase tracking-widest font-bold text-xs mt-4">
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPExperience;
