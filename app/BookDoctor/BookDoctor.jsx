"use client"
import Image from "next/image"
import FirstImage from "/public/doctors/doctor-07.jpg";
import Slider from "react-slick";

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
										<a href="doctor-profile.html">
											<Image className="img-fluid" alt="User Image" src={FirstImage}/>
										</a>
										<a href="javascript:void(0)" className="fav-btn">
											<i className="far fa-bookmark"></i>
										</a>
									</div>
									<div className="pro-content">
										<h3 className="title">
											<a href="doctor-profile.html">Linda Tobin</a> 
											<i className="fas fa-check-circle verified"></i>
										</h3>
										<p className="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(43)</span>
										</div>
										<ul className="available-info">
											<li>
												<i className="fas fa-map-marker-alt"></i> Kansas, USA
											</li>
											<li>
												<i className="far fa-clock"></i> Available on Fri, 22 Mar
											</li>
											<li>
												<i className="far fa-money-bill-alt"></i> $100 - $1000 
												<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div className="row row-sm">
											<div className="col-6">
												<a href="doctor-profile.html" className="btn view-btn">View Profile</a>
											</div>
											<div className="col-6">
												<a href="booking.html" className="btn book-btn">Book Now</a>
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