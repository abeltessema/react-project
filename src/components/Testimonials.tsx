import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Alemayehu Bekele',
      position: 'Facility Manager',
      company: 'Tikur Anbessa Hospital',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'General Power PLC delivered exceptional medical gas systems for our hospital. Their attention to detail and compliance with medical standards was outstanding. The team was professional, responsive, and completed the project on time.'
    },
    {
      id: 2,
      name: 'Ato Getachew Tadesse',
      position: 'Operations Director',
      company: 'Ethiopian Textile Manufacturing',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'The automation systems implemented by General Power have significantly improved our production efficiency. Their engineering expertise and ongoing support have been invaluable to our operations.'
    },
    {
      id: 3,
      name: 'Mrs. Sarah Johnson',
      position: 'Project Manager',
      company: 'International Development Corp',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'Working with General Power PLC on our commercial building project was a pleasure. They demonstrated deep technical knowledge, maintained excellent communication, and delivered high-quality results within budget.'
    },
    {
      id: 4,
      name: 'Ato Dawit Negash',
      position: 'Plant Manager',
      company: 'Addis Food Processing',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'The comprehensive HVAC and electrical systems designed by General Power have exceeded our expectations. Their understanding of food industry requirements and safety standards is impressive.'
    },
    {
      id: 5,
      name: 'Engineer Meron Assefa',
      position: 'Technical Director',
      company: 'Ethiopian Manufacturing Group',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'General Power PLC consistently delivers innovative solutions that meet our complex industrial requirements. Their team\'s expertise and commitment to excellence make them our preferred engineering partner.'
    },
    {
      id: 6,
      name: 'Ato Berhanu Wolde',
      position: 'Maintenance Supervisor',
      company: 'Hawassa Industrial Park',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      testimonial: 'The preventive maintenance program established by General Power has dramatically reduced our equipment downtime. Their 24/7 support service gives us confidence in our operations.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-current' : 'text-gray-300'
        }`}
        style={{
          color: index < rating ? '#B8860B' : undefined
        }}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who have experienced the quality and professionalism 
            that defines General Power PLC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote 
                  className="h-8 w-8" 
                  style={{ color: '#B8860B' }}
                />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#B8860B' }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="mt-20 rounded-2xl p-8 lg:p-12"
          style={{ 
            background: `linear-gradient(to right, #2C3E50, #1A252F)`
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: '#B8860B' }}
              >
                200+
              </div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: '#B8860B' }}
              >
                15+
              </div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: '#B8860B' }}
              >
                50+
              </div>
              <div className="text-white/90">Certified Engineers</div>
            </div>
            <div>
              <div 
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: '#B8860B' }}
              >
                24/7
              </div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;