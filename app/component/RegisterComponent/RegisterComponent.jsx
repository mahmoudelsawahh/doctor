import Image from 'next/image'
import mainImage from '/public/login-banner.png';
const RegisterComponent = () => {
  return (
    <>
        	<div class="content">
				<div class="container-fluid">
					
                <div class="row flex-row-reverse">
						<div class="col-md-8 offset-md-2">
								
							<div class="account-content">
                            <div class="row align-items-center justify-content-center flex-row-reverse">
									<div class="col-md-7 col-lg-6 login-left">
                                    <Image src={mainImage} class="img-fluid" alt="Doccure Login"/>	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3> تسجيل حساب جديد</h3>
										</div>
										
										<form action="https://dreamguys.co.in/demo/doccure/doctor-dashboard.html">
											<div class="form-group form-focus">
												<input type="text" class="form-control floating"/>
												<label class="focus-label" style={{width : '93%'}}>الاسم</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating"/>
												<label class="focus-label" style={{width : '93%'}}>رقم الهاتف</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating"/>
												<label class="focus-label" style={{width : '93%'}}>كلمه السر</label>
											</div>
											<div class="text-right">
												<a class="forgot-link" href="login.html">هل لديك حساب ؟</a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn w-100" type="submit">انشاء حساب </button>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">او</span>
											</div>
											<div class="row form-row social-login">
												<div class="col-6">
													<a href="#" class="btn btn-facebook btn-block w-100"><i class="fab fa-facebook-f mr-1"></i> فيسبوك</a>
												</div>
												<div class="col-6">
													<a href="#" class="btn btn-google btn-block w-100"><i class="fab fa-google mr-1"></i> جوجل</a>
												</div>
											</div>
										</form>										
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

export default RegisterComponent