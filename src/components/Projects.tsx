import React, { useState } from "react";
import { Package, Droplets, Palette, Zap } from "lucide-react";
import petPreformImg from "../PREFORM.jpeg";
import petBottlesImg from "../PET_bottles.jpeg";
import aquasafeImg from "../AQUASAFE.jpeg";
import customImg from "../custom.jpeg";

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    {
      id: 1,
      title: "PET Preforms",
      category: "preforms",
      image: petPreformImg,
      imageType: "tall" as const,
      description:
        "High-quality PET preforms in various weights and neck configurations",
      specifications: "9g–35g weight range",
      options: "Multiple colors and neck types",
      tags: ["Food Grade", "Custom Colors", "Various Necks"],
    },
    {
      id: 2,
      title: "Aquasafe Drinking Water",
      category: "water",
      image: aquasafeImg,
      imageType: "tall" as const,
      description: "Premium purified drinking water with advanced filtration",
      specifications: "600ml and 1.6L bottles",
      options: "RO, UV, and Ozone purification",
      tags: ["Premium Quality", "Multi-Stage Purification", "Trusted Brand"],
    },
    {
      id: 3,
      title: "PET Bottles",
      category: "bottles",
      image: petBottlesImg,
      imageType: "wide" as const,
      description: "Complete range of PET bottles for all packaging needs",
      specifications: "50ml–20L capacity",
      options: "Customizable shapes and business-specific designs",
      tags: ["Custom Design", "Wide Range", "Business Branding"],
    },
    {
      id: 4,
      title: "Custom Branded Bottled Water",
      category: "custom",
      image: customImg,
      imageType: "tall" as const,
      description:
        "Personalized water bottles for businesses and special events",
      specifications: "Various sizes available",
      options: "For hotels, restaurants, companies, and events",
      tags: ["Custom Branding", "Business Solutions", "Event Ready"],
    },
  ];

  const filters = [
    { id: "all", label: "All Products" },
    { id: "preforms", label: "Preforms" },
    { id: "bottles", label: "Bottles" },
    { id: "water", label: "Drinking Water" },
    { id: "custom", label: "Custom Branding" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#B8860B]">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality packaging solutions and pure water products for every need.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-md ${
                activeFilter === filter.id
                  ? "text-white shadow-lg scale-105"
                  : "bg-white/80 text-gray-700 hover:text-white border border-white/50"
              }`}
              style={{
                backgroundColor:
                  activeFilter === filter.id ? "#B8860B" : undefined,
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = "#B8860B";
                  e.currentTarget.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div
                className={`relative overflow-hidden flex items-center justify-center ${
                  product.imageType === "cover" ? "bg-gray-100" : "bg-white"
                }`}
                style={{ height: "220px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`group-hover:scale-105 transition-transform duration-300 ${
                    product.imageType === "cover"
                      ? "w-full h-full object-cover"
                      : product.imageType === "tall"
                        ? "h-full w-auto object-contain py-3"
                        : product.imageType === "wide"
                          ? "w-full h-auto object-contain px-4"
                          : "w-full h-full object-cover"
                  }`}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    <Package className="h-4 w-4 text-[#B8860B]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[#B8860B] mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Specifications:{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        {product.specifications}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Options:{" "}
                      </span>
                      <span className="text-sm text-gray-600">
                        {product.options}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#B8860B]/10 to-[#D4AF37]/10 text-[#B8860B] border border-[#B8860B]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-auto w-full text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl bg-gradient-to-r from-[#2C3E50] to-[#34495E] hover:from-[#B8860B] hover:to-[#D4AF37] hover:scale-105"
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

        {/* Production Capacity Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#2C3E50] to-[#1A252F] rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Production Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#B8860B] mb-2">
                  9g-35g
                </div>
                <div className="text-white/90">Preform Range</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                  50ml-20L
                </div>
                <div className="text-white/90">Bottle Capacity</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#B8860B] to-[#A67C00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#B8860B] mb-2">1</div>
                <div className="text-white/90">Water Brand</div>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                  100%
                </div>
                <div className="text-white/90">Custom Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Request Product Catalog
            <Package className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
