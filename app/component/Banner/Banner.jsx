"use client"
import Slider from "react-slick";
import SecondBanner from "./SecondBanner";
import FirstBanner from "./FirstBanner";

const Banner = () => {
	const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
	  rtl: true,
	  autoplay: true,


	  };

  return (
	<>
               <Slider {...settings}>
				 <div>
				 <FirstBanner/>
				 </div>
				 <div>
				 <SecondBanner/>
				 </div>
			   </Slider>
	</>
  )
}

export default Banner