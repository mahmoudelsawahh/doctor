import React from 'react'
import DoctorsDashboard from '../DoctorsDashboard/DoctorsDashboard';

const ChangeDoctorPassword = () => {
  return (
    <>
        		<div class="content">
				<div class="container-fluid">
					<div class="row">
					
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                             <DoctorsDashboard/>
                        </div>
						
                        <div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-md-12 col-lg-6">
										
											<form>
												<div class="form-group">
													<label>Old Password</label>
													<input type="password" class="form-control"/>
												</div>
												<div class="form-group">
													<label>New Password</label>
													<input type="password" class="form-control"/>
												</div>
												<div class="form-group">
													<label>Confirm Password</label>
													<input type="password" class="form-control"/>
												</div>
												<div class="submit-section">
													<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
												</div>
											</form>
											
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

export default ChangeDoctorPassword