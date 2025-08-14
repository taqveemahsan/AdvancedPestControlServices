
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Phone, BadgeCheck, Play, X } from "lucide-react";
import { IMAGES } from "@/data/images";
import { VIDEOS } from "@/data/media";
import { FEATURES, HOME_SERVICES } from "@/data/content";
import { useState } from "react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const marketingImages = [IMAGES.pestTypes, IMAGES.guarantee];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-pest-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">
              Get Rid of Pests—Fast, Safe & Guaranteed!
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
              <span className="font-semibold">Licensed & Insured</span> | Serving Windsor, Leamington & Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-pest-blue hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:226-350-4828">
                <Button size="lg" className="bg-pest-red hover:bg-pest-red/90">
                  <Phone className="mr-2" size={20} />
                  Call Now: 226-350-4828
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-pest-blue hidden md:block">
          <div className="h-full bg-[url('/hero-pest-tech.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Images Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Pest Management</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our licensed technicians are equipped to handle all your pest control needs with professional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Our licensed technicians are trained to handle all pest situations and we offer 24/7 Emergency Support.</li>
                <li>Licensed by the Ministry Of Environment Ontario.</li>
                <li>We handle all types of pests including bed bugs, cockroaches, ants, and more.</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={IMAGES.technician}
                alt="Pest Control Services"
                className="w-full h-auto md:w-3/4 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Materials Showcase */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Pest Control Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced Pest Control Services is committed to protecting your home and business from unwanted pests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {marketingImages.map((src) => (
              <div key={src} className="rounded-lg overflow-hidden shadow-lg">
                <img src={src} alt="Marketing" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Advanced Pest Control Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced Pest Control Services is a locally owned company serving Windsor, Leamington, and surrounding areas. With over 10 years of experience, we provide reliable and affordable pest control solutions for residential and commercial clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <BadgeCheck className="text-pest-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Licensed and Insured</span>
                    <p className="text-gray-600 mt-1">Our technicians are licensed by the Ministry of Environment Ontario.</p>
                  </div>
                </li>
                <li className="flex">
                  <BadgeCheck className="text-pest-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Eco-Friendly Options</span>
                    <p className="text-gray-600 mt-1">We offer environmentally friendly pest control solutions when possible.</p>
                  </div>
                </li>
                <li className="flex">
                  <BadgeCheck className="text-pest-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Guaranteed Results</span>
                    <p className="text-gray-600 mt-1">Our treatments come with warranties to ensure your satisfaction.</p>
                  </div>
                </li>
                <li className="flex">
                  <BadgeCheck className="text-pest-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Affordable Pricing</span>
                    <p className="text-gray-600 mt-1">Competitive rates with no hidden fees or charges.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={IMAGES.guarantee}
                alt="Advanced Pest Control Services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Pest Control Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions for all types of pest problems in residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICES.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">See how our team drives success</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl cursor-pointer group" onClick={handleOpenModal}>
              <img
                src="/lovable-uploads/VideoThumbnail.png"
                alt="Video Thumbnail"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 rounded-full p-6 group-hover:bg-white/90 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="w-12 h-12 text-pest-blue ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                src={VIDEOS.pestServices}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Additional Marketing Image */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={IMAGES.services} alt="Pest Services" className="w-full h-auto" />
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Michael Johnson"
              text="Advanced Pest Control Services eliminated our bed bug problem completely. Their technicians were professional and thorough. Highly recommended!"
              location="Windsor, ON"
            />
            <TestimonialCard 
              name="Sarah Thompson"
              text="We had a serious mouse problem in our restaurant. They responded quickly and resolved the issue with no disruption to our business."
              location="Leamington, ON"
            />
            <TestimonialCard 
              name="David Wilson"
              text="Fantastic service! They found and treated the source of our ant problem. Haven't seen a single ant since their treatment."
              location="Windsor, ON"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
