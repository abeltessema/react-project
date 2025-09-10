import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, Twitter, User, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Create mailto link with form data
    const subject = `Inquiry about ${formData.service || 'Services'}`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AService Interest: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:info@leogroupet.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Globe,
      title: 'Head Office - Rwanda',
      details: 'Leo Business Group',
      subDetails: 'Masoro Industrial Zone, Kigali, Rwanda'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+250 789 969 397',
      subDetails: 'General inquiries'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@leogroupet.com',
      subDetails: 'General inquiries',
      isEmail: true
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'www.leobusinessgroup.com',
      subDetails: 'Visit our main website'
    }
  ];

  const keyContacts = [
    {
      name: 'NZARAMYIMANA Philbert',
      role: 'General Manager',
      phone: '+250 789 863 932',
      email: 'philbert@leogroupet.com'
    },
    {
      name: 'Nebiyou Samuel',
      role: 'Managing Director',
      email: 'nebiyou@leogroupet.com'
    }
  ];

  const otherLocations = [
    'Kibagabaga, Trinity Plaza, 1st Floor, Kigali, Rwanda',
    'Rulindo, Northern Province, Rwanda',
    'Mbarara, Uganda'
  ];

  const services = [
    'Preform Manufacturing',
    'Bottle Production',
    'Drinking Water Bottling',
    'Plastic Waste Collection & Recycling',
    'Custom Branded Water',
    'Bulk Orders'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Get In <span className="text-[#B8860B]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your packaging needs? Contact our team for custom solutions and bulk orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">{info.title}</h4>
                    {info.isEmail ? (
                      <a 
                        href={`mailto:${info.details}`}
                        className="text-[#B8860B] hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{info.details}</p>
                    )}
                    {info.subDetails && <p className="text-gray-600 text-sm">{info.subDetails}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>
            
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all duration-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 focus:outline-none resize-vertical"
                  placeholder="Tell us about your packaging needs, quantities, custom requirements..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#1A252F] rounded-2xl h-64 flex items-center justify-center shadow-lg">
            <div className="text-center text-white">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-[#B8860B]" />
              <p className="text-lg font-medium">Leo Business Group</p>
              <p className="text-sm opacity-80">Masoro Industrial Zone, Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;