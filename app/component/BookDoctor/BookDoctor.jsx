"use client"
import Image from "next/image"
import FirstImage from "/public/doctors/doctor-07.jpg";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faStarHalf , faStar, faLocationPin, faClock, faMoneyCheckDollar, faExclamation} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const data = [
  {
    title : 1
  },
  {
    title : 1
  },
  {
    title : 1
  },
  {
    title : 1
  },
  {
    title : 1
  },
  {
    title : 1
  },
  {
    title : 1
  },
]
const BookDoctor = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        	<section className="section section-doctor">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-lg-4">
							<div className="section-header ">
								<h2>Book Our Doctor</h2>
								<p>Lorem Ipsum is simply dummy text </p>
							</div>
							<div className="about-content">
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
								<p>web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
								<a href="javascript:;">Read More..</a>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="doctor-slider slider">
              <Slider {...settings}>
                {data.map((item , id)=> {
                  return (
                    <div className="profile-widget" key={id}>
									<div className="doc-img">
										<Link href="/doctor-profile">
											<Image className="img-fluid" alt="User Image" src={FirstImage}/>
										</Link>
										<div className="fav-btn">
										<FontAwesomeIcon icon={faBookmark} />
										</div>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<Link href="/doctor-profile">Linda Tobin</Link> 
											<FontAwesomeIcon icon={faCircleCheck} color="green" style={{marginLeft : '5px'}}/>
								     		</h3>
										<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
										<div className="rating">
										<FontAwesomeIcon icon={faStar} color="gold"/>
										<FontAwesomeIcon icon={faStar} color="gold"/>
										<FontAwesomeIcon icon={faStar} color="gold"/>
										<FontAwesomeIcon icon={faStar} color="gold"/>
										<FontAwesomeIcon icon={faStarHalf}color="gold" />

											<span className="d-inline-block average-rating">(43)</span>
										</div>
										<ul className="available-info">
											<li>
											<FontAwesomeIcon icon={faLocationPin} style={{marginRight : '10px'}}/> Kansas, USA
											</li>
											<li>
											<FontAwesomeIcon icon={faClock} style={{marginRight : '10px'}}/>
											 Available on Fri, 22 Mar
											</li>
											<li>
											<FontAwesomeIcon icon={faMoneyCheckDollar} style={{marginRight : '10px'}}/> $100 - $1000 
									    	</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<Link href="/doctor-profile" className="btn view-btn">View Profile</Link>
											</div>
											<div className="col-6">
												<Link href="/doctor-profile" className="btn book-btn">Book Now</Link>
											</div>
										</div>
									</div>
								    </div>
                  )
                })}
             </Slider>
							</div>
						</div>
				   </div>
				</div>
			</section>
    </>
  )
}

export default BookDoctor