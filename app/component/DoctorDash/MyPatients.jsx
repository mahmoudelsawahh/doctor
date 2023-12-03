"use client"
import Link from 'next/link';
import DoctorsDashboard from '../DoctorsDashboard/DoctorsDashboard'
import "react-circular-progressbar/dist/styles.css";
import Image from 'next/image';
import personImage from '/public/patients/patient10.jpg'
const MyPatients = () => {
  return (
    <>
        	<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							
						 <DoctorsDashboard/>
							
						</div>
                        <div class="col-md-7 col-lg-8 col-xl-9">
                            <div class="row row-grid">
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="card widget-profile pat-widget-profile">
                                            <div class="card-body">
                                                <div class="pro-widget-content">
                                                    <div class="profile-info-widget">
                                                        <Link href="patient-profile.html" class="booking-doc-img">
                                                            <Image src={personImage} alt="User Image"/>
                                                        </Link>
                                                        <div class="profile-det-info">
                                                            <h3><Link href="patient-profile.html">يوسف محمد</Link></h3>
                                                            
                                                            <div class="patient-details">
                                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> المحله الكبري , الغربيه</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="patient-info">
                                                    <ul>
                                                        <li className='d-flex'>  رقم الهاتف <span> :  01007296138 </span> </li>
                                                        <li className='d-flex'>الوصف  <span> : ذكر , 30 سنه </span> </li>
                                                        <li className='d-flex'>فصيله الدم <span> : AB+ </span> </li>
                                                    </ul>
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

export default MyPatients