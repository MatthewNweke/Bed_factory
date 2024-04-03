'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function NextJsCarousel() {
  return (
    <div className="">
      <Carousel autoPlay={true} interval={3000} className="">
        <div>
          <img src="/Conway-Mobile-Banner.jpg" alt="image1" />
        </div>
        <div>
          <img src="/bfd-mobile-banner-swatches.jpg" alt="image2" />
        </div>
        <div>
          <img src="Oregon-Mobile-Banner.jpg" alt="image3" />
        </div>
        <div>
          <img src="/Venice-Mobile.jpg" alt="image4" />
        </div>
      </Carousel>
    </div>
  );
}

export default NextJsCarousel;
