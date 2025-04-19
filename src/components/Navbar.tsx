
import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/1b347ee4-1cab-418e-a413-4b8f6f9065ff.png" alt="Young King Logo" className="w-8 h-8" />
            <span className={`font-bold text-lg ${isScrolled ? "text-blue-900" : "text-white"}`}>
              Young King
            </span>
          </a>
          
          {!isMobile && (
            <div className={`flex gap-8 ${isScrolled ? "text-blue-900" : "text-white"}`}>
              <a href="#rates" className="hover:text-blue-400 transition-colors">Rates</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            </div>
          )}

          <a
            href="https://wa.me/6590195799"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all text-sm"
          >
            <Package className="w-4 h-4" />
            {!isMobile && "Send Cargo"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
