import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  src: string;
  buttonText?: string;
}

const VideoModal = ({ src, buttonText = "Watch Video" }: VideoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pest-red hover:bg-pest-red/90">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-3xl">
        <video src={src} controls className="w-full h-auto rounded-md" />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
