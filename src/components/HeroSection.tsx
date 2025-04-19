
import { Package, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80"
          alt="Logistics Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <img src="/logo.svg" alt="Young King Logo" className="w-20 h-20 text-white" />
            </div>
            <div className="h-16 w-0.5 bg-white/20" />
            <div>
              <h4 className="text-blue-200 font-medium mb-1">Singapore's Trusted</h4>
              <h2 className="text-white text-3xl font-bold">Air Cargo Partner</h2>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Global Logistics, <br />Local Excellence
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Seamless air cargo services between Singapore and India, delivering reliability and efficiency for your business needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/6590195799"
              className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-all"
            >
              <Send className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Send Cargo Now
            </a>
            <a
              href="#rates"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-medium transition-all"
            >
              <Package className="w-5 h-5" />
              View Rates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
