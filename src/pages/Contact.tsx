
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-pest-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Get in touch with our team to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-pest-blue/10 p-3 rounded-full mr-4">
                    <Phone className="text-pest-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-xl font-bold text-pest-blue">226-350-4828</p>
                    <p className="text-gray-600 text-sm mt-1">Available 24/7 for emergency services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pest-blue/10 p-3 rounded-full mr-4">
                    <Mail className="text-pest-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-lg">advancepestcontrol6@gmail.com</p>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pest-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="text-pest-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                    <p className="text-lg">Windsor, Leamington & Surrounding Areas</p>
                    <p className="text-gray-600 text-sm mt-1">Serving all of Windsor-Essex County</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pest-blue/10 p-3 rounded-full mr-4">
                    <Clock className="text-pest-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="mb-1"><span className="font-medium">Monday-Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p className="mb-1"><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed (Emergency Services Available)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3">About Us</h3>
                <p className="text-gray-700 mb-4">
                  Advanced Pest Control Services is a locally owned company founded by Rashid Idrees, a licensed Pest Control Professional with over 10 years of experience. We pride ourselves on providing reliable and affordable pest solutions throughout Windsor, Leamington, and surrounding areas.
                </p>
                <div className="flex items-center">
                  <img 
                    src="/technician-profile.jpg" 
                    alt="Rashid Idrees" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">Rashid Idrees</p>
                    <p className="text-sm text-gray-600">Pest Control Professional</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94795.30867775774!2d-83.0609327!3d42.3062409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2ac1b54f886b%3A0xb66cd49527fcdc51!2sWindsor%2C%20ON!5e0!3m2!1sen!2sca!4v1683676100918!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
