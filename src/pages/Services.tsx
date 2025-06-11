import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import { Bug, Rat, Sprout, Droplet } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-pest-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Pest Control Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive pest management solutions for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* Bed Bug Control */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-pest-blue/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <Bug className="text-pest-blue" size={64} />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Bed Bug Control</h2>
                <p className="text-gray-700 mb-4">
                  Our multi-pronged approach to bed bug elimination ensures complete eradication of these persistent pests.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our Bed Bug Control Methods:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Steam Treatment:</strong> High-temperature steam kills bed bugs and eggs on contact.</li>
                  <li><strong>Aprehend® Treatment:</strong> Professional-grade biological insecticide that continues working for up to 3 months.</li>
                  <li><strong>Heat Treatment:</strong> Whole-room heating that eliminates bed bugs in all life stages.</li>
                  <li><strong>Monitoring:</strong> Follow-up inspections to ensure complete elimination.</li>
                </ul>
              </div>
            </div>

            {/* Cockroach Treatment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 md:order-1 order-0">
                <div className="bg-pest-blue/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <Bug className="text-pest-blue" size={64} />
                </div>
              </div>
              <div className="md:col-span-2 md:order-0 order-1">
                <h2 className="text-2xl font-bold mb-4">Cockroach Treatment</h2>
                <p className="text-gray-700 mb-4">
                  Cockroaches can spread diseases and trigger allergies. Our comprehensive cockroach control services eliminate these pests quickly.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our Cockroach Treatment Methods:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>ULV Fogging:</strong> Ultra-low volume fogging treats hard-to-reach areas where cockroaches hide.</li>
                  <li><strong>Gel Baiting:</strong> Targeted placement of bait in areas where cockroaches travel and congregate.</li>
                  <li><strong>Crack & Crevice Treatment:</strong> Application in hiding spots to eliminate cockroaches at their source.</li>
                  <li><strong>Prevention Strategies:</strong> Recommendations to prevent future infestations.</li>
                </ul>
              </div>
            </div>

            {/* Rodent & Mice Control */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-pest-blue/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <Rat className="text-pest-blue" size={64} />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Rodent & Mice Control</h2>
                <p className="text-gray-700 mb-4">
                  Rodents can damage property and spread disease. Our rodent control services address current infestations and prevent future ones.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our Rodent Control Methods:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Inspection & Assessment:</strong> Thorough evaluation to identify entry points and activity areas.</li>
                  <li><strong>Trapping:</strong> Strategic placement of traps in high-activity areas.</li>
                  <li><strong>Exclusion:</strong> Sealing entry points to prevent rodents from entering the structure.</li>
                  <li><strong>Sanitation Recommendations:</strong> Advice on reducing attractants and harborage areas.</li>
                  <li><strong>Ongoing Monitoring:</strong> Regular checks to ensure the problem is resolved.</li>
                </ul>
              </div>
            </div>

            {/* Wasp Nest Removal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 md:order-1 order-0">
                <div className="bg-pest-blue/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <Sprout className="text-pest-blue" size={64} />
                </div>
              </div>
              <div className="md:col-span-2 md:order-0 order-1">
                <h2 className="text-2xl font-bold mb-4">Wasp Nest Removal</h2>
                <p className="text-gray-700 mb-4">
                  Wasps and hornets can be dangerous, especially for those with allergies. Our safe and effective wasp nest removal services protect your home and family.
                </p>
                <h3 className="font-semibold text-lg mb-2">Our Wasp Control Methods:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Safe Removal:</strong> Professional removal of wasp and hornet nests.</li>
                  <li><strong>Protective Equipment:</strong> Our technicians use appropriate safety gear.</li>
                  <li><strong>Treatment Options:</strong> Various approaches based on nest location and species.</li>
                  <li><strong>Prevention:</strong> Recommendations to discourage future nesting.</li>
                </ul>
              </div>
            </div>

            {/* Other Pests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="bg-pest-blue/10 p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                  <Droplet className="text-pest-blue" size={64} />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Other Pest Control Services</h2>
                <p className="text-gray-700 mb-4">
                  We handle a wide range of pest problems for residential and commercial properties.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Additional Services:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Flea Treatment</li>
                      <li>Spider Control</li>
                      <li>Centipede Removal</li>
                      <li>Silverfish Elimination</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">For All Properties:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Residential Homes</li>
                      <li>Apartments & Condos</li>
                      <li>Commercial Buildings</li>
                      <li>Restaurants & Food Service</li>
                      <li>Healthcare Facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </Layout>
  );
};

export default Services;
