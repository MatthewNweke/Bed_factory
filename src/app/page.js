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
    "/view-all-beds_2.jpg",
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
        <div className="grid grid-cols-3 gap-5 max-md:gap-y-10 max-sm:gap-x-12 max-sm:gap-y-5 max-xl:grid-cols-2 overflow-x-hidden ">
          {images.map((imageUrl, index) => (
            <HomeCards
              key={index}
              index={index}
              imageUrl={imageUrl}
              buttons={buttons}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-around items-center my-10 flex-wrap max-lg:mx-5 max-lg:justify-center max-lg:flex-col max-lg:gap-10">
        <div className="w-[35%] max-lg:w-[50%] max-md:w-[100%]">
          <p className="text-[2rem]  max-sm:text-[1.5rem] mb-3">
            Free Fabric Samples
          </p>
          <p className="text-[1.2rem] max-sm:text-[1rem] mb-3">
            We have a large selection of fabrics to choose from. Use our free
            sample service and have 6 fabric swatches delivered to your door, to
            be sure you are getting the perfect match for your room!
          </p>
          <button>Order Your Samples</button>
        </div>

        <div>
          <Image
            src="/bed-factory-swatches-home.jpg"
            alt="bed-swatches"
            width={610}
            height={610}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5 max-md:gap-y-10 place-items-center py-5 min-h-[50vh] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        <Image
          src="/silentnight.png"
          alt="silentnight"
          width={100}
          height={100}
        />
        <Image src="/limelight.png" alt="limelight" width={100} height={100} />
        <Image
          src="/bed-factory-direct1.png"
          alt="silentnight"
          width={100}
          height={100}
        />
        <Image src="/kaydian.png" alt="kaydian" width={100} height={100} />
        <Image src="/salus.png" alt="salus" width={100} height={100} />
        <Image src="/relyon.png" alt="relyon" width={100} height={100} />
        <Image src="/breasley.png" alt="breasley" width={100} height={100} />
        <Image src="/sealy.png" alt="sealy" width={100} height={100} />
        <Image src="/birlea.png" alt="birlea" width={100} height={100} />
        <Image
          src="/serene-brand.png"
          alt="serene-brand"
          width={100}
          height={100}
        />
        <Image src="/sleepzee.png" alt="sleepzee" width={100} height={100} />
        <Image src="/gfw_logo.png" alt="gfw_logo" width={100} height={100} />
      </div>

      <div className="leading-7 py-10 text-[1.1rem] px-3 w-[80%] relative left-1/2 -translate-x-1/2 max-md:w-[90%] max-sm:w-[100%] max-sm:px-3">
        <p className="text-[1.5rem] font-semibold mb-5">Welcome to Bed Factory Direct</p>
         Welcome to Bed Factory Direct We have over
        30 years experience in manufacturing and supplying a high standard of
        mattresses and divans. With 100’s of beds for sale at great prices, we
        take great pride in the service we provide for our customers as we
        believe they are at the heart of our operation, after all, a good
        night’s sleep is not a luxury but a necessity. From ottoman beds to
        pocket sprung mattresses, we have you covered in the bedroom. Take
        advantage of our super fast FREE delivery service on most items, buy
        direct and save money with Bed Factory Direct.   
        <p className="text-[1.2rem] font-semibold my-5">Why buy beds from Bed Factory Direct?</p>
         We have been supplying and manufacturing beds for a long
        time and have gained valuable experience selling quality leather beds,
        mattresses, divan beds & headboards all at rock bottom prices. We offer
        a huge selection of cheap beds and mattresses all with fast delivery
        times available, just choose your preferred delivery date using our
        delivery calendar at checkout. With 100’s of beds for sale at great
        prices, there is something to suit everyone including double beds,
        double and king size mattresses, bed frames with mattresses and more!.
        If you have any questions about our beds or mattresses don’t forget to
        call the team on 0151 548 1554, we are open until 10 pm to take your
        calls. Alternatively, you can chat with one of our experts on live chat,
        available on every page throughout our website.
         <p className="text-[1.2rem] font-semibold my-5">Express Delivery Beds</p>
        Looking for cheap beds delivered within days to the room of your choice?
        we have you covered. We have a page dedicated to quality divan beds,
        mattresses and ottoman beds which can be made and delivered within days!
        View our prime bed collection and choose your preferred delivery date at
        checkout.
      </div>
    </main>
  );
}
