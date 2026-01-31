
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white font-syncopate">
          PRISM <span className="text-primary">NYC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">
            Events
          </Link>
          <Link to="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">
            Artists
          </Link>
          <Link to="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">
            Gallery
          </Link>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-widest text-xs">
            VIP Tables
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 animate-in slide-in-from-top-5">
          <Link to="#" className="text-lg font-medium text-white uppercase tracking-widest">
            Events
          </Link>
          <Link to="#" className="text-lg font-medium text-white uppercase tracking-widest">
            Artists
          </Link>
          <Link to="#" className="text-lg font-medium text-white uppercase tracking-widest">
            Gallery
          </Link>
          <Button className="w-full bg-primary text-black hover:bg-primary/80 uppercase tracking-widest">
            Book VIP
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
