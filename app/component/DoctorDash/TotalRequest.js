"use client"
import Link from 'next/link';
import DoctorsDashboard from '../DoctorsDashboard/DoctorsDashboard'
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from 'next/image';
import personImage from '/public/patients/patient1.jpg'
const TotalRequest = () => {
  return (
    <>
        	<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							
						 <DoctorsDashboard/>
							
						</div>
						
						<div class="col-md-7 col-lg-8 col-xl-9">

							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4">اجمالي الحجوزات </h4>
									<div class="appointment-tab">
										{/* <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
											<li class="nav-item">
												<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
											</li> 
										</ul> */}
										
										<div class="tab-content">
										
											<div class="tab-pane show active" id="upcoming-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th> لاسم</th>
																		<th> التاريخ</th>
																		<th>الحاله</th>
																		<th class="text-center">المبلغ المدفوع</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				
																				<a href="" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> تم القول
																				</a>
																				
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				
																				<a href="" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> تم القبول
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				
																				<a href="" class="btn btn-sm bg-danger-light mx-3">
																					<i class="fas fa-times"></i> تم الرفض
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				
																				<a href="" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> قبول
																				</a>
																				<a href="" class="btn btn-sm bg-danger-light mx-3">
																					<i class="fas fa-times"></i> رفض
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				
																				<a href="" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> تم القبول
																				</a>
																			
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<Link href="/patients-dashboard" class="avatar avatar-sm mr-2">
                                                                                <Image
																					class="avatar-img rounded-circle"
																					src={personImage}
																					alt="User Image"
																					/>
                                                                                </Link>
																				<a href="/patients-dashboard" className='mx-3'> خالد احمد </a>
																			</h2>
																		</td>
																		<td>11/4/2023 <span class="d-block text-info">10.00 صباحا</span></td>
																		<td> جديد</td>
																		<td class="text-center">150 ج.م</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="" class="btn btn-sm bg-danger-light mx-3">
																					<i class="fas fa-times"></i> تم الرفض
																				</a>
																			</div>
																		</td>
																	</tr>
																
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</div>
									   
											<div class="tab-pane" id="today-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th class="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"/>
                                                                                </a>
																				<a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">6.00 PM</span></td>
																		<td>Fever</td>
																		<td>Old Patient</td>
																		<td class="text-center">$300</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/>
                                                                                </a>
																				<a href="patient-profile.html">Joan Gardner <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">5.00 PM</span></td>
																		<td>Old Patient</td>
																		<td class="text-center">$100</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"/>
                                                                                </a>
																				<a href="patient-profile.html">Daniel Griffing <span>#PT0007</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
																		<td>New Patient</td>
																		<td class="text-center">$75</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Walter Roberson <span>#PT0008</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
																		<td>Old Patient</td>
																		<td class="text-center">$350</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"/>
                                                                                </a>
																				<a href="patient-profile.html">Robert Rhodes <span>#PT0010</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																		<td>New Patient</td>
																		<td class="text-center">$175</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Harry Williams <span>#PT0011</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																		<td>New Patient</td>
																		<td class="text-center">$450</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>	
													</div>	
												</div>	
											</div>
											
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>		
    </>
  )
}

export default TotalRequest