import React from 'react';
import { Users, Target, Award, Globe, ArrowRight, Zap, Shield, Clock, Lightbulb, CheckCircle, TrendingUp, Recycle, Droplets, Factory } from 'lucide-react';
import NebaImage from '../Neba.jpg';
const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals across water, packaging, and plastic production',
      color: 'from-[#B8860B] to-[#D4AF37]',
    },
    {
      icon: Recycle,
      title: 'Eco-Conscious Approach',
      description: 'Actively recycling plastic and offering sustainable packaging solutions',
      color: 'from-[#2C3E50] to-[#34495E]',
    },
    {
      icon: Shield,
      title: 'Trusted Quality',
      description: 'Rigorous quality checks and purification standards for all products',
      color: 'from-[#1A252F] to-[#2C3E50]',
    },
    {
      icon: Globe,
      title: 'East African Reach',
      description: 'Operating in Rwanda, Uganda, and expanding across the region',
      color: 'from-[#D4AF37] to-[#F4D03F]',
    },
    {
      icon: Factory,
      title: 'End-to-End Solutions',
      description: 'From preforms to water bottling and distribution - complete service',
      color: 'from-[#B8860B] to-[#A67C00]',
    },
  ];

  const team = [
    {
      name: 'Nebeyou Dawit',
      role: 'CEO',
      photo: NebaImage,
      experience: '6+ Years',
    },
    {
      name: 'Position Available',
      role: 'Operations Manager',
      photo: null, // No image for placeholder
      experience: 'Join our Team',
    },
    {
      name: 'Position Available',
      role: 'Quality Director',
      photo: null, // No image for placeholder
      experience: 'Join our Team',
    },
  ];

  const stats = [
    { number: '5M+', label: 'Bottles Monthly' },
    { number: '10+', label: 'Years Experience' },
    { number: '3', label: 'Countries Served' },
    { number: '100%', label: 'Recycled Materials' },
  ];

  const coreValues = [
    {
      icon: Recycle,
      title: 'Environmental Action',
      description: 'Leading the charge in plastic waste collection and conversion into durable products',
      color: 'from-[#B8860B] to-[#D4AF37]'
    },
    {
      icon: Droplets,
      title: 'Purity & Safety',
      description: 'Uncompromising standards in water quality and product safety for all consumers',
      color: 'from-[#2C3E50] to-[#34495E]'
    },
    {
      icon: Factory,
      title: 'Reliable Manufacturing',
      description: 'Consistent, dependable production processes that meet and exceed expectations',
      color: 'from-[#1A252F] to-[#2C3E50]'
    },
    {
      icon: Globe,
      title: 'Regional Commitment',
      description: 'Dedicated to serving and expanding across East Africa with local expertise',
      color: 'from-[#D4AF37] to-[#F4D03F]'
    },
    {
      icon: CheckCircle,
      title: 'Integrity & Partnership',
      description: 'Building long-term relationships based on trust, transparency, and mutual success',
      color: 'from-[#B8860B] to-[#A67C00]'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#B8860B]/15 to-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2C3E50]/15 to-[#34495E]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#B8860B]/8 to-[#2C3E50]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission, Vision, Values Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  {/* Progress Circle */}
                  <svg className="w-32 h-32 rotate-[-90deg]" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#missionGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="314"
                      strokeDashoffset="94"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B8860B" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                OUR <span className="text-[#B8860B]">MISSION</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To provide high-quality, safe, and pure drinking water, and to produce eco-friendly plastic packaging products — while contributing to a cleaner environment by collecting plastic waste and converting it into durable hard plastic products.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  {/* Progress Circle */}
                  <svg className="w-32 h-32 rotate-[-90deg]" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#visionGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="314"
                      strokeDashoffset="78"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2C3E50" />
                        <stop offset="100%" stopColor="#34495E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#2C3E50] to-[#34495E] rounded-full flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                OUR <span className="text-[#2C3E50]">VISION</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To lead East Africa in responsible manufacturing — where clean water is accessible, packaging is sustainable, and plastic waste is transformed into long-lasting products that serve our communities and protect the environment.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  {/* Progress Circle */}
                  <svg className="w-32 h-32 rotate-[-90deg]" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#valuesGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="314"
                      strokeDashoffset="62"
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="valuesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1A252F" />
                        <stop offset="100%" stopColor="#2C3E50" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1A252F] to-[#2C3E50] rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                CORE <span className="text-[#2C3E50]">VALUES</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Environmental action, purity & safety, reliable manufacturing, regional commitment, and integrity & partnership guide every decision we make in our mission for sustainability.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center bg-gradient-to-r from-[#B8860B] to-[#2C3E50] text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:from-[#D4AF37] hover:to-[#34495E] transition-all duration-300 group text-lg">
              Partner With Us Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why Choose Us</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leading East Africa in sustainable packaging and pure water solutions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Detailed Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do in our mission for sustainability
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry professionals dedicated to delivering excellence in bottling and packaging
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-28 h-28 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-28 h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center border-2 border-slate-200">
                        <span className="text-slate-400 text-xs font-medium text-center">Coming<br/>Soon</span>
                      </div>
                    )}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                                    
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[#B8860B] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-slate-500 font-medium">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;