import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";
import thumbnail1 from "@/assets/thumbnail-1.jpg";
import thumbnail2 from "@/assets/thumbnail-2.jpg";
import thumbnail3 from "@/assets/thumbnail-3.jpg";
import thumbnail4 from "@/assets/thumbnail-4.jpg";
import thumbnail5 from "@/assets/thumbnail-5.jpg";
import thumbnail6 from "@/assets/thumbnail-6.jpg";

const videos = [
  {
    id: 1,
    thumbnail: thumbnail1,
    title: "Building a Modern Tech Setup - Complete Guide for Developers",
    channel: "Tech Insights",
    views: "1.2M views",
    uploadDate: "2 days ago"
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    title: "Epic Mountain Adventure - Stunning 4K Nature Documentary",
    channel: "Nature Films",
    views: "856K views",
    uploadDate: "5 days ago"
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    title: "Ultimate Gaming Setup Tour 2024 - RGB Overload!",
    channel: "Gaming Paradise",
    views: "2.1M views",
    uploadDate: "1 week ago"
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    title: "Professional Cooking Masterclass - Learn From the Experts",
    channel: "Culinary Arts",
    views: "654K views",
    uploadDate: "3 days ago"
  },
  {
    id: 5,
    thumbnail: thumbnail5,
    title: "Transform Your Body in 30 Days - Complete Workout Program",
    channel: "Fitness Pro",
    views: "3.2M views",
    uploadDate: "1 day ago"
  },
  {
    id: 6,
    thumbnail: thumbnail6,
    title: "The Art of Coffee - Brewing the Perfect Cup",
    channel: "Coffee Culture",
    views: "423K views",
    uploadDate: "4 days ago"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
