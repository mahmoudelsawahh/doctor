import React from 'react'
import PatientsDashboard from '../PatientsDashboard/PatientsDashboard'
import userImage from "/public/patients/patient.jpg";
import Image from 'next/image';

const UserSetting = () => {
  return (
    <>
        		<div class="content">
				<div class="container-fluid">
					<div class="row">
					
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                             <PatientsDashboard/>
                        </div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									
									<form>
										<div class="row form-row">
											<div class="col-12 col-md-12">
												<div class="form-group">
													<div class="change-avatar d-block">
														<div class="profile-img text-center mb-3">
                                                        <Image
                                                                class="avatar-img rounded-circle"
                                                                src={userImage}
                                                                alt="User Image"
                                                                />													
                                                     	</div>
														
													</div>
                                                    <div class="upload-img">
															<div class="change-photo-btn">
																<span><i class="fa fa-upload"></i> تحميل الصوره </span>
																<input type="file" class="upload"/>
															</div>
														</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>الاسم الاول</label>
													<input type="text" class="form-control" value="Richard"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>الاسم الثاني</label>
													<input type="text" class="form-control" value="Wilson"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>تاريخ الميلاد</label>
													<div class="cal-icon">
														<input type="text" class="form-control datetimepicker" value="24-07-1983"/>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>فصيله الدم</label>
													<select class="form-control select">
														<option>A-</option>
														<option>A+</option>
														<option>B-</option>
														<option>B+</option>
														<option>AB-</option>
														<option>AB+</option>
														<option>O-</option>
														<option>O+</option>
													</select>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>البريد الالكتروني</label>
													<input type="email" class="form-control" value="richard@example.com"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>رقم الهاتف</label>
													<input type="text" value="+1 202-555-0125" class="form-control"/>
												</div>
											</div>
											<div class="col-12">
												<div class="form-group">
												<label>العنوان</label>
													<input type="text" class="form-control" value="806 Twin Willow Lane"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>المدينه</label>
													<input type="text" class="form-control" value="Old Forge"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>المحافظه</label>
													<input type="text" class="form-control" value="Newyork"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>الرقم البريدي</label>
													<input type="text" class="form-control" value="13420"/>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>الجنسيه</label>
													<input type="text" class="form-control" value="United States"/>
												</div>
											</div>
										</div>
										<div class="submit-section">
											<button type="submit" class="btn btn-primary submit-btn">حفظ</button>
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

export default UserSetting