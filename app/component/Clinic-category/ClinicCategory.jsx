"use client"
import Image from "next/image"
import FirstImage from "/public/specialities/specialities-01.png"
import SecondImage from "/public/specialities/specialities-02.png"
import ThreeImage from "/public/specialities/specialities-03.png"
import FourImage from "/public/specialities/specialities-04.png"
import FiveImage from "/public/specialities/specialities-05.png"
import { Container } from "react-bootstrap"
import Slider from "react-slick";
import Link from "next/link"

const data = [
	{	title : "Urology",
	  	imageSrc : FirstImage
	},
	{	title : "Neurology",
	  	imageSrc : SecondImage
	},
	{	title : "Orthopedic",
	  	imageSrc : ThreeImage
	},
	{	title : "Cardiologist",
	  	imageSrc : FourImage
	},
	{	title : "Dentist",
	  	imageSrc : FiveImage
	},
	{	title : "Cardiologist",
	  	imageSrc : FourImage
	},
	{	title : "Dentist",
	  	imageSrc : FiveImage
	},
]
const ClinicCategory = () => {
	const settings = {
		infinite: true,
		speed: 5000,
		autoplay: true,
      cssEase: "linear",
	  rtl: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
			  breakpoint: 1290,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
				breakpoint: 400,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
		  ]
	  };
  
  return (
    <>
        	<section className="section section-specialities">
			<Container fluid>
					<div className="section-header text-center">
						<h2>Clinic and Specialities</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-9">
					<Slider {...settings}>
          {data.map((item , id)=>{
			return (
				<div key={id} className="text-center d-flex flex-column  justify-content-center align-items-center">
					<div className="speicality-img">
						<Image src={item.imageSrc} className="img-fluid" alt="Speciality"/>
					</div>
					<Link href="/search" className="mt-3" style={{color : '#000'}}>{item.title}</Link>
				</div>
			)
		  })}
        </Slider>
					</div>
					</div>
				</Container>   
			</section>	 
            
    </>
  )
}

export default ClinicCategory