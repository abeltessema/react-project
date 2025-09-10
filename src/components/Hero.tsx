import React from 'react';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';
import bottleImage from '../bottle-image.jpg';

console.log('Bottle Image Path:', bottleImage); // Debug line

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bottleImage})`,
            minHeight: '100vh',
            backgroundColor: '#2C3E50' // fallback color
          }}
        ></div>
        
        {/* Dark Overlay for better text readability */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(44, 62, 80, 0.85)' }}
        ></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(184, 134, 11, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 134, 11, 0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full opacity-30 animate-pulse"
              style={{
                backgroundColor: '#B8860B',
                left: `${25 + i * 25}%`,
                top: `${20 + i * 30}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>

        {/* Geometric Shape */}
        <div 
          className="absolute top-20 right-20 w-40 h-40 border opacity-10 rotate-45 animate-spin"
          style={{ 
            borderColor: '#B8860B',
            animationDuration: '30s'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-8 py-3 mb-8"
          style={{ 
            backgroundColor: 'rgba(184, 134, 11, 0.15)',
            borderColor: 'rgba(184, 134, 11, 0.3)'
          }}
        >
          <Zap className="w-5 h-5" style={{ color: '#B8860B' }} />
          <span className="text-white font-medium">Delivering Purity and Packaging Since 2015</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white">
            Bottling &
          </span>
          <span 
            className="inline-block animate-pulse"
            style={{ color: '#B8860B' }}
          >
            Packaging Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Eco-friendly packaging solutions across East Africa - delivering pure water with sustainable, recycled materials for healthier communities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-white text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{ 
              backgroundColor: '#B8860B',
              boxShadow: '0 10px 30px rgba(184, 134, 11, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A0750A';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 134, 11, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8860B';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 134, 11, 0.3)';
            }}
          >
            Our Products
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={scrollToServices}
            className="group inline-flex items-center justify-center px-10 py-5 bg-transparent text-white text-lg font-semibold rounded-xl transition-all duration-300 border-2 hover:shadow-lg"
            style={{ borderColor: '#B8860B' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(184, 134, 11, 0.1)';
              e.currentTarget.style.borderColor = '#A0750A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#B8860B';
            }}
          >
            Our Services
            <div 
              className="ml-3 w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
              style={{ backgroundColor: '#B8860B' }}
            ></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div className="group cursor-pointer">
            <div 
              className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
              style={{ color: '#B8860B' }}
            >
              5M+
            </div>
            <div className="text-gray-300 text-lg">Bottles Produced Monthly</div>
          </div>
          <div className="group cursor-pointer">
            <div 
              className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
              style={{ color: '#B8860B' }}
            >
              10+
            </div>
            <div className="text-gray-300 text-lg">Years of Industry Experience</div>
          </div>
          <div className="group cursor-pointer">
            <div 
              className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
              style={{ color: '#B8860B' }}
            >
              100%
            </div>
            <div className="text-gray-300 text-lg">Sustainably Recycled Plastic Solutions</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-3">Discover More</span>
          <div 
            className="w-8 h-12 border-2 rounded-full flex justify-center relative"
            style={{ borderColor: 'rgba(184, 134, 11, 0.6)' }}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: '#B8860B' }}
            ></div>
            <ChevronDown 
              className="absolute -bottom-6 w-5 h-5 animate-bounce" 
              style={{ 
                color: '#B8860B',
                animationDelay: '0.5s'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;