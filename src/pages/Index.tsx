
import { Phone, Package, Plane, Truck, MapPin, Route } from "lucide-react";
import { useState, useEffect } from "react";

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
      title: "Air Cargo Shipping",
      description: "Fast and reliable air cargo services between Singapore and India",
      bgColor: "bg-blue-50"
    },
    {
      icon: Package,
      title: "Courier & Express Parcel",
      description: "Express parcel delivery for time-sensitive shipments",
      bgColor: "bg-green-50"
    },
    {
      icon: Truck,
      title: "Door-to-Door Service",
      description: "Convenient pickup and delivery at your doorstep",
      bgColor: "bg-purple-50"
    },
    {
      icon: MapPin,
      title: "Custom Clearance",
      description: "Professional customs clearance assistance",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700/10 z-0" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative w-32 h-32 mb-8">
              <img src="/logo.svg" alt="Young King Logo" className="w-full h-full text-blue-700 animate-float" />
              <div className="absolute -inset-4 bg-blue-100/30 rounded-full blur-xl -z-10" />
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold font-poppins text-gray-900 leading-tight">
              Young King Pte. Ltd.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 font-inter max-w-2xl">
              Premier Air Cargo Services between Singapore and India
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="https://wa.me/6590195799"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold font-inter flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Package className="w-5 h-5" />
                Send Cargo Now on WhatsApp
              </a>
              <a
                href="#rates"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-semibold font-inter flex items-center gap-2 transition-all border border-gray-200 hover:border-gray-300"
              >
                View Our Rates
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Rates Section */}
      <section id="rates" className="py-20 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Route className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-poppins text-white mb-12">
            Our Service Rates
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Plane className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white">Singapore to India</h3>
              </div>
              <p className="text-5xl font-bold mb-2 text-white">$8<span className="text-2xl">/kg</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Plane className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white">India to Singapore</h3>
              </div>
              <p className="text-5xl font-bold mb-2 text-white">$6<span className="text-2xl">/kg</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-poppins mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-1`}
              >
                <div className="bg-white p-4 rounded-xl inline-block mb-6">
                  <service.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-poppins">{service.title}</h3>
                <p className="text-gray-600 font-inter">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center font-poppins mb-12">
            About Us
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 text-center font-inter leading-relaxed mb-8">
              YOUNG KING PTE. LTD. is a Singapore-based logistics company offering fast, secure, and cost-effective courier and air cargo services to and from India. With a strong focus on reliability and customer support, we help individuals and businesses deliver across borders seamlessly.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-center text-gray-600 font-inter">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold">UEN</p>
                <p>202302772E</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="font-semibold">Address</p>
                <p>22 Upper Dickson Road, Singapore - 207481</p>
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
        } right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110 z-50 flex items-center gap-2`}
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
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default Index;
