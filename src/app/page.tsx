
import  HeroSection  from "@/components/hero-section"
import  BrowseRange  from "@/components/browse-range"
import  ProductGrid  from "@/components/product-grid"
import RoomInspiration  from "@/components/room-inspiration"
import  InstagramFeed  from "@/components/instagram-feed"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main>
        <HeroSection />
        <div className="bg-[#F9F1E7]">
          <BrowseRange />
          <ProductGrid />
        </div>
        <RoomInspiration />
        <InstagramFeed />
      </main>
      
    </div>
  )
}

