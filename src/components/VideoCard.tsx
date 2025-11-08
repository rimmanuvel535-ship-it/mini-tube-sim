import { Card } from "@/components/ui/card";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  uploadDate: string;
}

export const VideoCard = ({ thumbnail, title, channel, views, uploadDate }: VideoCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-transparent cursor-pointer transition-all duration-200 hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          12:34
        </div>
      </div>
      <div className="pt-3 px-1">
        <h3 className="text-foreground font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs mb-1">{channel}</p>
        <p className="text-muted-foreground text-xs">
          {views} • {uploadDate}
        </p>
      </div>
    </Card>
  );
};
