import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "../LEO-new.png";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Preform Manufacturing",
    "Bottle Production",
    "Drinking Water Bottling",
    "Plastic Waste Recycling",
    "Custom Branded Water",
    "Bulk Orders",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white bg-gradient-to-br from-[#2C3E50] to-[#1A252F]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Company Info */}
          <div className="lg:pr-6">
            <img
              src={logo}
              alt="LEO Business Group"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              East Africa's leading bottling and packaging solutions provider,
              delivering eco-friendly products and pure water since 2015.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/leobusinessgroup?igsh=MXNob2JnYmUzOWIzbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] group/ig"
              >
                <svg
                  className="h-5 w-5 text-gray-400 group-hover/ig:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=250789969397&text=Hello+Leo+Business+Group&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-[#25D366] group/wa"
              >
                <svg
                  className="h-5 w-5 text-gray-400 group-hover/wa:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 transition-colors duration-300 text-left text-sm hover:text-[#B8860B]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 transition-colors duration-300 cursor-pointer text-sm hover:text-[#B8860B]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-[#B8860B]" />
                <p className="text-gray-300 text-sm">+250 789 969 397</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-[#B8860B]" />
                <a
                  href="mailto:info@leogroupet.com"
                  className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300 text-sm"
                >
                  info@leogroupet.com
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-3 flex-shrink-0 text-[#B8860B]" />
                <p className="text-gray-300 text-sm">www.leogroupet.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Locations */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">
            Other Locations
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">
                Masoro Industrial Zone, Kigali, Rwanda
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">
                Rulindo, Northern Province, Rwanda
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">Mbarara, Uganda</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-4 border-white/10">
          <p className="text-gray-500 text-xs text-right">
            © {new Date().getFullYear()} Leo Business Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
