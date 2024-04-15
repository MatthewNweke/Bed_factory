'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../../css/styles.css'

function CarouselSlider() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay={true} interval={3000} showIndicators={false} showThumbs={false} infiniteLoop={true} className=" carousel">
        <div className="h-[100%]">
          <img src="/Conway-Mobile-Banner.jpg" alt="image1" style={{ objectFit: 'contain' }} />
        </div>
        {/* <div className="h-[100%]">
          <img src="/bfd-mobile-banner-swatches.jpg" alt="image2" style={{ objectFit: 'contain' }} />
        </div>
        <div className="h-[100%]">
          <img src="Oregon-Mobile-Banner.jpg" alt="image3" style={{ objectFit: 'contain' }} />
        </div> */}
        {/* <div className="h-[100%]">
          <img src="/Venice-Mobile.jpg" alt="image4" style={{ objectFit: 'contain' }} />
        </div> */}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
