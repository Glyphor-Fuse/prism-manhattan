import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LineupPulse from "@/components/LineupPulse";
import VIPExperience from "@/components/VIPExperience";
import EventsCalendar from "@/components/EventsCalendar";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <LineupPulse />
      <VIPExperience />
      <EventsCalendar />
      <Footer />
    </main>
  );
}
