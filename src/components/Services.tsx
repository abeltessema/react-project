import React from "react";
import {
  Package,
  Droplets,
  Recycle,
  Factory,
  Package2,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: "Preform Manufacturing",
      description:
        "High-quality PET preforms manufactured to precise specifications for various bottle applications.",
      features: [
        "9g–35g Weight Range",
        "Multiple Neck Sizes",
        "Food Grade Quality",
        "Custom Specifications",
      ],
      gradient: "from-[#B8860B] to-[#D4AF37]",
    },
    {
      icon: Package2,
      title: "Bottle Production",
      description:
        "Complete bottle manufacturing from small containers to large capacity bottles with custom branding.",
      features: [
        "50ml–20L Capacity",
        "Various Shapes & Designs",
        "Custom Branding Options",
        "Food Grade Materials",
      ],
      gradient: "from-[#2C3E50] to-[#34495E]",
    },
    {
      icon: Droplets,
      title: "Drinking Water Bottling",
      description:
        "Premium water bottling services with advanced purification technology and trusted brand names.",
      features: [
        "RO Purification",
        "UV & Ozone Treatment",
        "Aquasafe Brand",
        "Intore Brand",
      ],
      gradient: "from-[#1A252F] to-[#2C3E50]",
    },
    {
      icon: Recycle,
      title: "Plastic Waste Collection & Recycling",
      description:
        "Comprehensive waste management solutions converting plastic waste into durable, reusable products.",
      features: [
        "Waste Collection Services",
        "Advanced Recycling Process",
        "Durable Product Creation",
        "Environmental Impact",
      ],
      gradient: "from-[#D4AF37] to-[#F4D03F]",
    },
  ];

  const processSteps = [
    {
      icon: Package,
      title: "Design & Planning",
      description:
        "Custom design solutions tailored to your specific requirements",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "State-of-the-art production facilities ensuring quality and efficiency",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous testing and quality assurance at every stage",
    },
    {
      icon: Award,
      title: "Delivery",
      description: "Reliable delivery and ongoing support for all our products",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#B8860B]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete bottling and packaging solutions with eco-friendly
            practices and premium quality.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#B8860B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: "#B8860B" }}
                      ></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-6 w-full text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#2C3E50" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B8860B";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2C3E50";
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to delivery, we ensure excellence at every step of
              our manufacturing process
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-[#B8860B]">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your{" "}
              <span className="text-[#B8860B]">Project</span>?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Need custom packaging solutions or bulk water bottling services?
              Let's discuss how we can help grow your business.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
                <Zap className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
