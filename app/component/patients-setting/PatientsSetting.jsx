import React from "react";
import doctorImage from "/public/doctors/doctor-01.jpg";

import Image from "next/image";
import PatientsDashboard from "../PatientsDashboard/PatientsDashboard";
const PatientsSetting = () => {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title text-center"> اعدادات الحساب</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <PatientsDashboard/>
            </div>

            <div class="col-md-7 col-lg-8 col-xl-9">
              <div class="card">
                <div class="card-body pt-0">
                  <div class="tab-content pt-0">
                    <div
                      id="pat_appointments"
                      class="tab-pane fade show active"
                    >
                      <div class="card card-table mb-0">
                        <div class="card-body">
                          <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>الطبيب</th>
                                  <th> التاريخ</th>
                                  <th>موعد الحجز</th>
                                  <th>التكلفه</th>
                                  <th>الحاله</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 class="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        class="avatar avatar-sm ml-5" style={{marginLeft : '10px'}}
                                      >
                                        <Image
                                          class="avatar-img rounded-circle"
                                          src={doctorImage}
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        د/ علاء حسين <span>اسنان</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    11/4/2023
                                    <span class="d-block text-info">
                                      10.00 مساءاً
                                    </span>
                                  </td>
                                  <td>10/4/2023</td>
                                  <td>جنيه 160</td>
                                  <td>
                                    <span class="badge badge-pill bg-success-light">
                                      تم القبول
                                    </span>
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
    </>
  );
};

export default PatientsSetting;
