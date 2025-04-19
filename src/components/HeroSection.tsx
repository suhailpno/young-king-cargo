
import { Package, Send, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80"
          alt="Logistics Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <img src="/lovable-uploads/1b347ee4-1cab-418e-a413-4b8f6f9065ff.png" alt="Young King Logo" className="w-24 h-24" />
            </div>
            <div>
              <h4 className="text-blue-200 font-medium mb-2 tracking-wide">Singapore's Premier</h4>
              <h2 className="text-white text-4xl font-bold">Air Cargo Solutions</h2>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Connecting Businesses<br />Across Borders
          </h1>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl leading-relaxed">
            Experience seamless air cargo services between Singapore and India. Fast, reliable, and efficient logistics solutions tailored for your business success.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://wa.me/6590195799"
              className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <Send className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Get Started Now
            </a>
            <a
              href="#rates"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transition-all transform hover:translate-y-[-2px]"
            >
              <Package className="w-5 h-5" />
              View Our Rates
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
