import React from 'react';
import { Star, Quote } from 'lucide-react';
import MaleFaceImage from '../male-face.jpg';
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kagabo Jackson',
      // position: 'Facility Manager',
      company: 'Master Beauty Products',
      image: MaleFaceImage,
      rating: 5,
      testimonial: 'Working with Leo Business Group has been a true partnership. Their packaging solutions are of excellent quality, reliable, and designed with precision to reflect our brand’s image. Deliveries have always been timely, and the service highly professional. Beyond packaging, we also trust Aquasafe water for daily use within our company — a testament to the quality and consistency Leo Business Group stands for.'
    },
    {
      id: 2,
      name: 'Yves',
      // position: 'Operations Director',
      company: 'Sorwatom',
      image: MaleFaceImage,
      rating: 5,
      testimonial: 'Leo Business Group has provided us with packaging solutions that meet international standards of quality and reliability. Their commitment to detail ensures that our products are always well protected and attractively presented. Their professionalism and dedication to customer satisfaction make them a trusted partner for our operations.'
    },
    {
      id: 3,
      name: 'Philbert',
      // position: 'Project Manager',
      company: 'Zoda Ltd',
      image: MaleFaceImage,
      rating: 5,
      testimonial: 'At Zoda Ltd, we value partners who understand both functionality and presentation. Leo Business Group has exceeded our expectations by delivering packaging that is strong, efficient, and brand-enhancing. Their team’s flexibility and commitment to excellence have made them a vital part of our supply chain.'
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
            that defines Leo Business Group.
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

        
      </div>
    </section>
  );
};

export default Testimonials;