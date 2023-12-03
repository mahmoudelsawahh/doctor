import Image from 'next/image'
import React from 'react'
import userImage from "/public/doctors/doctor-02.jpg";
import Link from 'next/link';

const DoctorsDashboard = () => {
  return (
<div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <Image src={userImage} alt="User Image" />
                    </a>
                    <div class="profile-det-info">
                      <h3> د/ احمد محمد </h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fas fa-birthday-cake"></i> جراحة الفم والوجه والفكين
                        </h5>
                        <h5 class="mb-0">
                          <i class="fas fa-map-marker-alt"></i>المحله الكبري
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dashboard-widget">
                  <nav class="dashboard-menu">
                    <ul>
                      <li class="active">
                        <Link href="/patients-dashboard">
                          <i class="fas fa-columns"></i>
                          <span>الحجوزات</span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/doctors-dashboard/doctor-request">
                          <i class="fas fa-user-cog"></i>
                          <span> الطلبات</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctors-dashboard/my-patients">
                          <i class="fas fa-user-cog"></i>
                          <span> المرضي</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctors-dashboard/work-time">
                          <i class="fas fa-lock"></i>
                          <span>  جدول العمل</span>
                        </Link>
                      </li>
                      <li>
                      <Link href="/doctors-dashboard/doctor-profile-settings">
                          <i class="fas fa-sign-out-alt"></i>
                          <span> اعدادات الحساب</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctors-dashboard/social-media">
                          <i class="fas fa-lock"></i>
                          <span> مواقع التواصل الاجتماعي</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctors-dashboard/doctor-change-password">
                          <i class="fas fa-lock"></i>
                          <span>  تغير كلمه السؤ </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/patients-dashboard/change-password">
                          <i class="fas fa-lock"></i>
                          <span>  تسجيل الخروج</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              )
}

export default DoctorsDashboard