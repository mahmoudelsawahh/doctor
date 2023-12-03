import Image from 'next/image'
import React from 'react'
import userImage from "/public/patients/patient.jpg";
import Link from 'next/link';

const PatientsDashboard = () => {
  return (
<div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <Image src={userImage} alt="User Image" />
                    </a>
                    <div class="profile-det-info">
                      <h3>احمد محمد </h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fas fa-birthday-cake"></i> 38 سنه
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
                        <Link href="/patients-dashboard/favourites">
                          <i class="fas fa-user-cog"></i>
                          <span> المفضلة</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/patients-dashboard/user-setting">
                          <i class="fas fa-user-cog"></i>
                          <span>اعدادات الحساب</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/patients-dashboard/change-password">
                          <i class="fas fa-lock"></i>
                          <span>تغير كلمه السر</span>
                        </Link>
                      </li>
                      <li>
                      <Link href="/">
                          <i class="fas fa-sign-out-alt"></i>
                          <span>تسجيل الخروج</span>
                          </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              )
}

export default PatientsDashboard