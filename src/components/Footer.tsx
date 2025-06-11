
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Advanced Pest Control Services</h3>
            <p className="text-gray-300 mb-4">
              Reliable and Affordable Pest Solutions for your home and business.
              Licensed by the Ministry of Environment Ontario.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pest-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pest-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/bed-bug-prep" className="text-gray-300 hover:text-pest-yellow transition-colors">
                  Bed Bug Preparation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pest-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-pest-yellow" />
                <a href="tel:226-350-4828" className="hover:text-pest-yellow transition-colors">226-350-4828</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-pest-yellow" />
                <a href="mailto:advancepestcontrol6@gmail.com" className="hover:text-pest-yellow transition-colors">advancepestcontrol6@gmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-pest-yellow" />
                <span>Serving Windsor, Leamington & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Advanced Pest Control Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
