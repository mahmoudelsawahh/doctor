import CheckoutNav from "./CheckoutNav"
import Image from "next/image";
import FirstImage from "/public/doctors/doctor-thumb-01.jpg";
import SecImage from "/public/specialities/specialities-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMoneyCheckDollar, faStar } from "@fortawesome/free-solid-svg-icons";
import Image1 from "/public/features/feature-01.jpg";
import Image2 from "/public/features/feature-02.jpg";
import Image3 from "/public/features/feature-03.jpg";
import Image4 from "/public/features/feature-04.jpg";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Checkout = () => {
  return (
    <>
        <CheckoutNav/>
        <div class="content">
				<div class="container">

					<div class="row">
                    						
						<div class="col-md-5 col-lg-4 theiaStickySidebar">
						
							<div class="card booking-card">
								<div class="card-header">
									<h4 class="card-title">تفاصيل الحجز </h4>
								</div>
								<div class="card-body">
								
									<div class="booking-doc-info">
                                    <a href="doctor-profile.html">
                                        <Image
                                            src={FirstImage}
                                            alt="User Image"
                                            width={75}
                                            height={75}
                                        />
                                        
                                        </a>
										<div class="booking-info mx-4">
											<h4>
                                            <a href="doctor-profile.html">دكتور تامر الشافعى</a>
                                            </h4>
											<div class="rating">
                                                  <span class="d-inline-block average-rating mx-1">(35)</span>
                                               <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                                                <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                                                <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                                                <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                                                <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
											</div>
											<div class="clinic-details">
                                            <p className="doc-location">
                                                <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faLocationDot} />
                                                    المحلة الكبرى ,
                                                    الشعبية
                                             </p>
                                          </div>
										</div>
									</div>
									
									<div class="booking-summary">
										<div class="booking-item-wrap">
											<ul class="booking-date">
												<li>
                                                <span>16 Nov 2019</span>
                                                التاريخ 
                                                </li>
												<li>
                                                <span>10:00 AM</span>
                                                الساعة 
                                                </li>
											</ul>
											<ul class="booking-fee">
												<li>
                                                <span>$100</span>
                                                رسوم الاستشارة
                                                </li>
											</ul>
											<div class="booking-total">
												<ul class="booking-total-list">
													<li>
                                                    <span>الاجمالي</span>

                                                    <span class="total-cost">$100</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>							
						</div>


						<div class="col-md-7 col-lg-8">
							<div class="card">
								<div class="card-body">
								
									<form action="">
									
										<div class="info-widget">
											<h4 class="card-title">المعلومات شخصية</h4>
											<div class="row">
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>الاسم الاول</label>
														<input class="form-control" type="text"/>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>الاسم الاخير</label>
														<input class="form-control" type="text"/>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>البريد الالكتروني</label>
														<input class="form-control" type="email"/>
													</div>
												</div>
												<div class="col-md-6 col-sm-12">
													<div class="form-group card-label">
														<label>رقم الهاتف</label>
														<input class="form-control" type="text"/>
													</div>
												</div>
											</div>
										</div>
										
										<div class="payment-widget">
											<h4 class="card-title">سداد رسوم الحجز   </h4>
											
											<div class="payment-list">
												
												<div class="row">
													<div class="col-md-6">
														<div class="form-group card-label">
															<label for="card_name">Name on Card</label>
															<input class="form-control" id="card_name" type="text"/>
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group card-label">
															<label for="card_number">Card Number</label>
															<input class="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text"/>
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="expiry_month">Expiry Month</label>
															<input class="form-control" id="expiry_month" placeholder="MM" type="text"/>
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="expiry_year">Expiry Year</label>
															<input class="form-control" id="expiry_year" placeholder="YY" type="text"/>
														</div>
													</div>
													<div class="col-md-4">
														<div class="form-group card-label">
															<label for="cvv">CVV</label>
															<input class="form-control" id="cvv" type="text"/>
														</div>
													</div>
												</div>
											</div>
											
											
											<div class="terms-accept">
												<div class="custom-checkbox">
												   <input type="checkbox" id="terms_accept"/>
												   <label for="terms_accept"> لقد قرأت وقبلت الشروط  <a href="#">الشروط &amp; والأحكام</a></label>
												</div>
											</div>
											
											<div class="submit-section mt-4">
												<button type="submit" class="btn btn-primary submit-btn">تاكيد الدفع</button>
											</div>
											
										</div>
									</form>
									
								</div>
							</div>
							
						</div>
					</div>

				</div>

			</div>	
    </>
  )
}

export default Checkout