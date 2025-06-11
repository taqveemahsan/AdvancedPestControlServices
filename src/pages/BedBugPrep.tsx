
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import ImageGallery from "@/components/ImageGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/data/images";

const BedBugPrep = () => {
  // Images for the gallery
  const marketingImages = [
    {
      src: IMAGES.technician,
      alt: "Pest Control Technicians",
      caption:
        "Our licensed technicians are trained to handle all pest situations and provide 24/7 Emergency Support",
    },
    {
      src: IMAGES.businessCard,
      alt: "Advanced Pest Control Services Business Card",
      caption: "Licensed by the Ministry Of Environment Ontario",
    },
    {
      src: IMAGES.pestTypes,
      alt: "Pest Types Handled",
      caption: "We handle all types of pests including bed bugs, cockroaches, ants, and more",
    },
    {
      src: IMAGES.guarantee,
      alt: "Service Guarantee",
      caption: "Quality Assured and Customer Satisfaction Guaranteed",
    },
    {
      src: IMAGES.services,
      alt: "Pest Services",
      caption: "Professional services at minimal cost",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-pest-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bed Bug Preparation Guide</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Follow these steps to prepare your home for effective bed bug treatment
          </p>
        </div>
      </section>

      {/* Marketing Materials Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Services & Guarantees</h2>
          <div className="mb-12">
            <ImageGallery images={marketingImages} />
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Preparation Steps for Bed Bug Treatment</h2>
            
            <Tabs defaultValue="before" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="before">Before Treatment</TabsTrigger>
                <TabsTrigger value="after">After Treatment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="before" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Remove all bedding and linens</p>
                          <p className="text-gray-600">Wash all bed linens, curtains, clothing, stuffed animals, etc. in the hottest water possible and dry on the highest setting for at least 30 minutes.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Clear clutter</p>
                          <p className="text-gray-600">Remove unnecessary items and clutter from floors, under beds, and in closets to reduce hiding places for bed bugs.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Vacuum thoroughly</p>
                          <p className="text-gray-600">Vacuum all floors, carpets, baseboards, bed frames, furniture, and cracks and crevices where bed bugs may hide.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Move furniture</p>
                          <p className="text-gray-600">Pull furniture away from walls so our technicians can access all areas. Remove dresser drawers and place them in the center of the room.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Cover electronic devices</p>
                          <p className="text-gray-600">Cover computers, TVs, and other sensitive electronic equipment with plastic to protect them during treatment.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="after" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Wait before re-entering</p>
                          <p className="text-gray-600">Stay out of treated areas for the amount of time specified by our technician (typically 4-6 hours).</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Ventilate the premises</p>
                          <p className="text-gray-600">Open windows and doors to ventilate the treated areas once it's safe to re-enter.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Keep monitoring</p>
                          <p className="text-gray-600">Continue to monitor for bed bug activity. Some treatments may require up to two weeks to fully eliminate all bed bugs.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Report any activity</p>
                          <p className="text-gray-600">If you notice any bed bug activity after treatment, contact us immediately for follow-up treatment.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-pest-blue mr-2 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-semibold">Preventive measures</p>
                          <p className="text-gray-600">Consider using mattress encasements designed to prevent bed bug infestations and keep your home clutter-free.</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <p className="font-semibold">Important Note:</p>
              <p className="text-gray-700">For the most effective treatment, please follow all preparation instructions carefully. Proper preparation plays a critical role in the success of bed bug elimination.</p>
              <p className="text-gray-700 mt-2">If you have any questions or need assistance with preparation, please call us at <span className="font-semibold">226-350-4828</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </Layout>
  );
};

export default BedBugPrep;
