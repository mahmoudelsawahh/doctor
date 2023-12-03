"use client"
import React from 'react'
import PatientsDashboard from '../PatientsDashboard/PatientsDashboard'
import Image from "next/image"
import FirstImage from "/public/doctors/doctor-07.jpg";
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

const FavouritesComponent = () => {
  return (
    <>
           <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title text-center"> اعدادات الحساب</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <PatientsDashboard/>
            </div>

            <div class="col-md-7 col-lg-8 col-xl-9">
               <div className='row gap-4' style={{justifyContent : 'center', alignItems : 'center'}}>
               {data.map((item , id)=> {
                  return (
                    <div className="profile-widget col-12 col-sm-6 col-md-4 col-lg-3 " key={id}>
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
                                        <FontAwesomeIcon icon={faCircleCheck} color="green" style={{marginLeft : '5px'}}/>
											<Link href="/doctor-profile">Linda Tobin</Link> 
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
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FavouritesComponent