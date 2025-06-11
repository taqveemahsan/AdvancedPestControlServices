
interface TestimonialCardProps {
  name: string;
  text: string;
  location: string;
}

const TestimonialCard = ({ name, text, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-2">
        <div className="text-pest-yellow">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">★</span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
  );
};

export default TestimonialCard;
