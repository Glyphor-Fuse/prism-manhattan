
import { Button } from "@/components/ui/button";

const events = [
  { day: "24", month: "OCT", title: "Neon Nights Opening", artist: "Neon Protocol", time: "10:00 PM - 4:00 AM" },
  { day: "25", month: "OCT", title: "Deep House Sessions", artist: "Velvet Void", time: "10:30 PM - 5:00 AM" },
  { day: "31", month: "OCT", title: "Haunted Frequency", artist: "Cyber Synth", time: "9:00 PM - 6:00 AM" },
  { day: "01", month: "NOV", title: "Afterlife Tour", artist: "Echo Chamber", time: "11:00 PM - 5:00 AM" },
];

const EventsCalendar = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syncopate mb-4">Upcoming Events</h2>
          <p className="text-gray-400 uppercase tracking-widest">Mark your calendar</p>
        </div>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-center border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors duration-300"
            >
              {/* Date */}
              <div className="flex flex-col items-center justify-center w-full md:w-24 mb-4 md:mb-0 md:mr-8 bg-zinc-900/50 p-4 rounded-sm border border-white/5">
                <span className="text-3xl font-bold text-white font-syncopate">{event.day}</span>
                <span className="text-xs text-primary font-bold uppercase tracking-widest">{event.month}</span>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-400 uppercase tracking-wide">
                  <span>ft. {event.artist}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{event.time}</span>
                </div>
              </div>

              {/* Action */}
              <div className="w-full md:w-auto">
                <Button variant="outline" className="w-full md:w-auto border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs font-bold h-12 px-8">
                  Get Tickets
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Button variant="link" className="text-primary uppercase tracking-widest text-sm hover:text-white">
             View Full Calendar →
           </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
