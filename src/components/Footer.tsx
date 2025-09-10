import React from 'react';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../LEO-new.png';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Preform Manufacturing',
    'Bottle Production',
    'Drinking Water Bottling',
    'Plastic Waste Recycling',
    'Custom Branded Water',
    'Bulk Orders'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white bg-gradient-to-br from-[#2C3E50] to-[#1A252F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="LEO Business Group"
                className="h-[120px] w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              East Africa's leading bottling and packaging solutions provider, delivering 
              eco-friendly products and pure water since 2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Twitter className="h-5 w-5 text-white" />
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
                    className="text-gray-300 transition-colors duration-300 text-left hover:text-[#B8860B]"
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
                  <span className="text-gray-300 transition-colors duration-300 cursor-pointer hover:text-[#B8860B]">
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
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-[#B8860B]" />
                <div>
                  <p className="text-gray-300 font-medium">Leo Business Group</p>
                  <p className="text-gray-400 text-sm">Masoro Industrial Zone</p>
                  <p className="text-gray-400 text-sm">Kigali, Rwanda</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-[#B8860B]" />
                <div>
                  <p className="text-gray-300">+250 789 969 397</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-[#B8860B]" />
                <div>
                  <a 
                    href="mailto:info@leogroupet.com"
                    className="text-gray-300 hover:text-[#B8860B] transition-colors duration-300"
                  >
                    info@leogroupet.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-[#B8860B]" />
                <div>
                  <p className="text-gray-300">www.leobusinessgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Locations */}
        <div className="mt-12 pt-8 border-t border-[#34495e]">
          <h4 className="text-lg font-semibold mb-4">Other Locations</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">Kibagabaga, Trinity Plaza, Kigali</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">Rulindo, Northern Province, Rwanda</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2 text-[#B8860B] flex-shrink-0" />
              <span className="text-sm">Mbarara, Uganda</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 border-[#34495e]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Leo Business Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;