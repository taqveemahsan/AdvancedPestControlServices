
import { ComponentType } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-lg shadow-lg p-6 border-t-4 border-pest-blue transition-all duration-300">
      <div className="bg-pest-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon size={32} className="text-pest-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
