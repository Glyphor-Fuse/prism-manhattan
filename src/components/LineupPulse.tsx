
import { Card, CardContent } from "@/components/ui/card";

const artists = [
  { name: "NEON PROTOCOL", genre: "Techno / House", image: "https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/dj-1.jpg", date: "FRI OCT 24" },
  { name: "VELVET VOID", genre: "Deep Trance", image: "https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/dj-2.jpg", date: "SAT OCT 25" },
  { name: "CYBER SYNTH", genre: "Electro", image: "https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/dj-3.jpg", date: "FRI OCT 31" },
  { name: "ECHO CHAMBER", genre: "Progressive", image: "https://raw.githubusercontent.com/Glyphor-Fuse/prism-manhattan/main/public/images/dj-1.jpg", date: "SAT NOV 01" },
];

const LineupPulse = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-primary font-bold tracking-widest uppercase mb-2">The Sound</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-syncopate">Lineup Pulse</h2>
          </div>
          <div className="hidden md:block">
             <span className="text-white/50 text-sm tracking-widest uppercase">Drag to explore</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex space-x-6 px-6 min-w-max">
          {artists.map((artist, index) => (
            <div 
              key={index} 
              className="group relative w-[300px] md:w-[400px] h-[500px] overflow-hidden rounded-none cursor-pointer transition-all duration-500 hover:scale-[1.02]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary text-black text-xs font-bold tracking-widest uppercase mb-3">
                  {artist.date}
                </span>
                <h3 className="text-3xl font-bold text-white font-syncopate mb-1 leading-none">
                  {artist.name}
                </h3>
                <p className="text-gray-400 uppercase tracking-widest text-xs">
                  {artist.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineupPulse;
