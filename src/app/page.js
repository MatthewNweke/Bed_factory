// pages/index.js
import React from "react";
import Image from "next/image";
import CarouselSlider from "@/components/carousel/CarouselSlider";
import HomeCards from "@/components/cards/HomeCards";

export default function Home() {
  const images = [
    "/divan-beds.jpg",
    "/bed-factory-bed-frames.jpg",
    "/bed-factory-wooden-beds.jpg",
    "/bed-factory-mattresses.jpg",
    "/bed-factory-metal-beds.jpg",
    "/ottoman-beds.jpg",
    "/tv-beds.jpg",
    "/wooden_bunk.jpg",
    "/divan-bed-base.jpg",
    "/headboards.jpg",
    "/custom-szie-beds_1.jpg",
    "/view-all-beds_2.jpg"
  ];

  const buttons = [
    { defaultText: "Divan Beds from €198", buttonText: "EXPLORE" },
    { defaultText: "Bed frames from €89", buttonText: "EXPLORE" },
    { defaultText: "Wooden frames from €99", buttonText: "EXPLORE" },
    { defaultText: "Mattresses from €79", buttonText: "EXPLORE" },
    { defaultText: "Metal Beds from €89", buttonText: "EXPLORE" },
    { defaultText: "Ottoman Beds from €249", buttonText: "EXPLORE" },
    { defaultText: "Bunk Beds", buttonText: "EXPLORE" },
    { defaultText: "Tv Beds", buttonText: "EXPLORE" },
    { defaultText: "Divan Base only", buttonText: "EXPLORE" },
    { defaultText: "Headboards", buttonText: "EXPLORE" },
    { defaultText: "Custom sizes", buttonText: "EXPLORE" },
    { defaultText: "View all Beds", buttonText: "EXPLORE" },
    
  ];

  return (
    <main className="">
      <CarouselSlider />
      <div className="flex justify-center items-center my-10 max-lg:mx-5">
        <div className="grid grid-cols-3 gap-5 max-md:gap-y-10 max-sm:gap-12 max-xl:grid-cols-2 overflow-x-hidden ">
          {images.map((imageUrl, index) => (
            <HomeCards key={index} index={index} imageUrl={imageUrl} buttons={buttons} />
          ))}
        </div>
      </div>
    </main>
  );
}
