
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  columns?: number;
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const columnClass = columns === 2 
    ? "grid-cols-1 md:grid-cols-2" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  
  return (
    <div className={`grid ${columnClass} gap-6`}>
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover"
            />
            {image.caption && (
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-700">{image.caption}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImageGallery;
