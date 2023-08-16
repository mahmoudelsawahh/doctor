"use client"
import Image from 'next/image'
import mainImage from '/public/login-banner.png';
import Link from 'next/link';
const LoginComponent = () => {
  return (
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
											<h3>تسجيل <span>الدخول</span></h3>
										</div>
										<form action="https://dreamguys.co.in/demo/doccure/index.html">
											<div class="form-group form-focus">
												<input type="email" class="form-control floating"/>
												<label class="focus-label" style={{width : '93%'}}>البريد الالكتروني</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating"/>
												<label class="focus-label" style={{width : '93%'}}>كلمه المرور</label>
											</div>
											<div class="text-right">
												<a class="forgot-link" href="/">هل نسيت كلمه السر ؟</a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn w-100" type="submit">تسجيل الدخول</button>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">او</span>
											</div>
											<div class="row form-row social-login">
												<div class="col-6">
													<a  href="#" class="btn btn-facebook btn-block w-100">
                                                    {/* <Image src={facebookIcon} alt='googleIcon' width={20} height={20} style={{color : '#fff'}}/> */}
                                                     Facebook</a>
												</div>
												<div class="col-6">
													<a href="#" class="btn btn-google btn-block w-100">
                                                     {/* <Image src={googleIcon} alt='googleIcon'/> */}
                                                    Google</a>
												</div>
											</div>
											<div class="text-center dont-have">ليس لديك جساب ؟ <Link href={"/register"}>انشاء حساب جديد</Link></div>
										</form>
									</div>
								</div>
							</div>
								
						</div>
					</div>

				</div>

			</div>  )
}

export default LoginComponent