
import { useState, useEffect } from "react";
import { Phone, Package, Plane, Truck, MapPin, Send } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const services = [
    {
      icon: Plane,
      title: "Air Cargo Solutions",
      description: "Direct air freight services with guaranteed space allocation and competitive rates",
      bgColor: "bg-blue-50"
    },
    {
      icon: Package,
      title: "Express Delivery",
      description: "Time-critical shipments with door-to-door service and real-time tracking",
      bgColor: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "Last Mile Delivery",
      description: "Efficient local distribution with scheduled or on-demand options",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Custom Clearance",
      description: "Expert customs documentation and clearance management",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* Rates Section */}
      <section id="rates" className="py-32 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 mix-blend-overlay opacity-10">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
            alt="Air Cargo Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            Competitive Rates
          </h2>
          <p className="text-blue-100 text-center mb-16 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Get the best value for your shipments.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Send className="w-8 h-8 text-blue-200" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Singapore to India</h3>
              </div>
              <p className="text-6xl font-bold mb-2 text-white">$8<span className="text-2xl text-blue-200">/kg</span></p>
              <p className="text-blue-200">Express Air Cargo Service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Plane className="w-8 h-8 text-blue-200" />
                </div>
                <h3 className="text-2xl font-semibold text-white">India to Singapore</h3>
              </div>
              <p className="text-6xl font-bold mb-2 text-white">$6<span className="text-2xl text-blue-200">/kg</span></p>
              <p className="text-blue-200">Express Air Cargo Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-blue-50 p-4 rounded-xl inline-block mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              About Us
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img src="/lovable-uploads/1b347ee4-1cab-418e-a413-4b8f6f9065ff.png" alt="Young King Logo" className="w-32 h-32 mb-8" />
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    YOUNG KING PTE. LTD. is a trusted Singapore-based logistics provider, delivering excellence in air cargo services between Singapore and India. Our commitment to reliability, efficiency, and customer satisfaction sets us apart in the industry.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <p className="font-semibold text-gray-900 mb-2">Registration No. (UEN)</p>
                    <p className="text-gray-600">202302772E</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <p className="font-semibold text-gray-900 mb-2">Office Address</p>
                    <p className="text-gray-600">22 Upper Dickson Road<br />Singapore - 207481</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6590195799"
        className={`fixed ${
          isVisible ? "bottom-6" : "-bottom-20"
        } right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110 z-50 flex items-center gap-3`}
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default Index;
