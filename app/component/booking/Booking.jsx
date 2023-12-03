"use client"
import React from 'react'
import Image from "next/image";
import FirstImage from "/public/doctors/doctor-thumb-01.jpg";
import SecImage from "/public/specialities/specialities-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLeftLong, faLocationDot, faMoneyCheckDollar, faRightLong, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
const Booking = () => {
  return (
    <>
       <div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title text-center"> الحجز مع دكتور تامر الشافعى</h2>
						</div>
					</div>
				</div>
	   </div>
      <div className="content">
				<div className="container">
					<div className="row">
						<div className="col-12">
            <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left flex-grow-1">
              <div className="doctor-img">
                <div href="doctor-profile.html">
                  <Image
                    src={FirstImage}
                    className="img-fluid"
                    alt="User Image"
                  />
                </div>
              </div>
              <div className="doc-info-cont mx-md-3">
                <h4 className="doc-name">
                  <div href="doctor-profile.html">دكتور تامر الشافعى</div>
                </h4>
                <p className="doc-speciality">
                  دكتور الامراض الباطنية -الجهاز الهضمي والكبد
                </p>
                <h5 className="doc-department">
                  <Image
                    src={SecImage}
                    className="img-fluid"
                    alt="Speciality"
                  />
                  اسنان
                </h5>
                <div className="rating">
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <span className="d-inline-block average-rating">(17)</span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faLocationDot} />
                    المحلة الكبرى ,
                    الشعبية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
							
							
							<div className="card booking-schedule schedule-widget">
							
								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
										
											<div className="day-slot">
												<ul>
													<li className="left-arrow">
														<div>
                            <FontAwesomeIcon icon={faLeftLong} />
														</div>
													</li>
													<li>
														<span>Mon</span>
														<span className="slot-date">11 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Tue</span>
														<span className="slot-date">12 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Wed</span>
														<span className="slot-date">13 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Thu</span>
														<span className="slot-date">14 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Fri</span>
														<span className="slot-date">15 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Sat</span>
														<span className="slot-date">16 Nov <small className="slot-year">2019</small></span>
													</li>
													<li>
														<span>Sun</span>
														<span className="slot-date">17 Nov <small className="slot-year">2019</small></span>
													</li>
													<li className="right-arrow">
														<div>
                            <FontAwesomeIcon icon={faRightLong} />
                          	</div>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								</div>
								<div className="schedule-cont">
									<div className="row">
										<div className="col-md-12">
										
											<div className="time-slot">
												<ul className="clearfix">
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing selected">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
													<li>
														<div className="timing">
															<span>9:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>10:00</span> <span>AM</span>
														</div>
														<div className="timing">
															<span>11:00</span> <span>AM</span>
														</div>
													</li>
												</ul>
											</div>
											
										</div>
									</div>
								</div>								
							</div>
							<div className="submit-section proceed-btn text-right">
								<Link href="/checkout" className="btn btn-primary submit-btn">احجز الان</Link>
							</div>							
						</div>
					</div>
				</div>

			</div>		

    </>
  )
}

export default Booking