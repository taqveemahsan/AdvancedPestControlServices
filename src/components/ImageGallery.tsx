
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: ReactNode;
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
              <div className="p-4 bg-white text-sm text-gray-700 space-y-2">
                {image.caption}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImageGallery;
