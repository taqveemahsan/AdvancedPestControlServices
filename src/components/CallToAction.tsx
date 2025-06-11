
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-pest-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Rid of Pests?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today and take the first step towards a pest-free home or business.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-pest-blue hover:bg-gray-100 font-semibold text-lg px-8">
              Contact Us
            </Button>
          </Link>
          <a href="tel:226-350-4828">
            <Button size="lg" className="bg-pest-red hover:bg-pest-red/90 font-semibold text-lg px-8">
              <Phone className="mr-2" size={20} />
              Call Now: 226-350-4828
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
