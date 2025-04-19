
import { Phone, Package, Plane, Truck } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Cargo Shipping",
      description: "Fast and reliable air cargo services between Singapore and India"
    },
    {
      icon: Package,
      title: "Courier & Express Parcel",
      description: "Express parcel delivery for time-sensitive shipments"
    },
    {
      icon: Truck,
      title: "Door-to-Door Service",
      description: "Convenient pickup and delivery at your doorstep"
    },
    {
      icon: Package,
      title: "Custom Clearance",
      description: "Professional customs clearance assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.svg" alt="Young King Logo" className="w-24 h-24 text-blue-700" />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold font-poppins text-gray-900">
            Young King Pte. Ltd.
          </h1>
          <p className="mt-4 text-xl text-gray-600 font-inter">
            Premier Air Cargo Services between Singapore and India
          </p>
          <a
            href="https://wa.me/6590195799"
            className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold font-inter flex items-center gap-2 transition-colors"
          >
            <Package className="w-5 h-5" />
            Send Cargo Now on WhatsApp
          </a>
        </div>
      </header>

      {/* Rates Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-8">
            Our Service Rates
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Singapore to India</h3>
              <p className="text-4xl font-bold mb-2">$8/kg</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">India to Singapore</h3>
              <p className="text-4xl font-bold mb-2">$6/kg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-poppins">{service.title}</h3>
                <p className="text-gray-600 font-inter">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-8">
            About Us
          </h2>
          <p className="text-lg text-gray-700 text-center font-inter leading-relaxed">
            YOUNG KING PTE. LTD. is a Singapore-based logistics company offering fast, secure, and cost-effective courier and air cargo services to and from India. With a strong focus on reliability and customer support, we help individuals and businesses deliver across borders seamlessly.
          </p>
          <div className="mt-8 text-center text-gray-600 font-inter">
            <p className="mb-2">UEN: 202302772E</p>
            <p>22 Upper Dickson Road, Singapore - 207481</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6590195799"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Index;
