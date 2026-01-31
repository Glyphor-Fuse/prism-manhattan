
const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-[0.2em] text-white font-syncopate block mb-6">
              PRISM <span className="text-primary">NYC</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining Manhattan nightlife with immersive soundscapes and unparalleled luxury.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Events Calendar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resident Artists</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VIP Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Venue Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>647 W 28th St,<br/>New York, NY 10001</li>
              <li><a href="mailto:info@prismnyc.com" className="hover:text-primary transition-colors">info@prismnyc.com</a></li>
              <li>(212) 555-0199</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Stay Connected</h4>
            <p className="text-gray-400 text-xs mb-4">
              Join our guest list for exclusive event announcements.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-black border border-white/20 text-white px-4 py-2 text-xs w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-black px-4 py-2 text-xs font-bold uppercase hover:bg-primary/80">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; 2024 Prism Manhattan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
