import React from 'react'
import PatientsDashboard from '../PatientsDashboard/PatientsDashboard'

const ChangePassword = () => {
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
									<div class="row">
										<div class="col-md-12 col-lg-6">
										
											<form>
												<div class="form-group">
													<label>كلمه المرور القديمه</label>
													<input type="password" class="form-control"/>
												</div>
												<div class="form-group">
													<label>كلمه المرور الجديده</label>
													<input type="password" class="form-control"/>
												</div>
												<div class="form-group">
													<label>تاكيد كلمه السر</label>
													<input type="password" class="form-control"/>
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
				</div>

			</div>	
    </>
  )
}

export default ChangePassword