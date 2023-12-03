"use client"
import Link from 'next/link';
import DoctorsDashboard from '../DoctorsDashboard/DoctorsDashboard'
import "react-circular-progressbar/dist/styles.css";
import Image from 'next/image';
import personImage from '/public/patients/patient10.jpg'
const WorkTimeTable = () => {
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
                             <div class="col-sm-12">
                                 <div class="card">
                                     <div class="card-body">
                                         <h4 class="card-title">جدولة المواعيد</h4>
                                         <div class="profile-box">
                                             <div class="row">

                                                 <div class="col-lg-4">
                                                     <div class="form-group">               
                                                         <label>مدة الكشف </label>
                                                         <select class="select form-control">
                                                             <option>-</option>
                                                             <option>15 دقيقة</option>
                                                             <option selected="selected">30 دقيقة</option>  
                                                             <option>45 دقيقة</option>
                                                             <option>1 ساعه</option>
                                                         </select>
                                                     </div>
                                                 </div>

                                             </div>     
                                             <div class="row">
                                                 <div class="col-md-12">
                                                     <div class="card schedule-widget mb-0">
                                                     
                                                         <div class="schedule-header">
                                                         
                                                             <div class="schedule-nav">
                                                                 <ul class="nav nav-tabs nav-justified">
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_sunday">السبت</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link active" data-toggle="tab" href="#slot_monday">الاحد</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_tuesday">الاثنين</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_wednesday">الثلاثاء</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_thursday">الاربعاء</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_friday">الخميس</a>
                                                                     </li>
                                                                     <li class="nav-item">
                                                                         <a class="nav-link" data-toggle="tab" href="#slot_saturday">الجمعه</a>
                                                                     </li>
                                                                 </ul>
                                                             </div>
                                                             
                                                         </div>

                                                         <div class="tab-content schedule-cont">
                                                         
                                                             <div id="slot_sunday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>المواعيد المتاحه</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> اضافه موعد</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">غير متاح</p>
                                                             </div>

                                                             <div id="slot_monday" class="tab-pane fade show active">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>المواعيد المتاحه</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#edit_time_slot"><i class="fa fa-edit mr-1"></i>تعديل</a>
                                                                 </h4>
                                                                 
                                                                 <div class="doc-times">
                                                                     <div class="doc-slot-list">
                                                                         8:00 مساءاً - 11:30 صباحا
                                                                         <a href="javascript:void(0)" class="delete_schedule">
                                                                             <i class="fa fa-times"></i>
                                                                         </a>
                                                                     </div>
                                                                     <div class="doc-slot-list">
                                                                         11:30 مساءاً - 1:30 مساءاً
                                                                         <a href="javascript:void(0)" class="delete_schedule">
                                                                             <i class="fa fa-times"></i>
                                                                         </a>
                                                                     </div>
                                                                     <div class="doc-slot-list">
                                                                         3:00 صباحا - 5:00 صباحا
                                                                         <a href="javascript:void(0)" class="delete_schedule">
                                                                             <i class="fa fa-times"></i>
                                                                         </a>
                                                                     </div>
                                                                     <div class="doc-slot-list">
                                                                         6:00 مساءاً - 11:00 مساءاً
                                                                         <a href="javascript:void(0)" class="delete_schedule">
                                                                             <i class="fa fa-times"></i>
                                                                         </a>
                                                                     </div>
                                                                 </div>
                                                                 
                                                             </div>

                                                             <div id="slot_tuesday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>Time Slots</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">Not Available</p>
                                                             </div>

                                                             <div id="slot_wednesday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>Time Slots</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">Not Available</p>
                                                             </div>

                                                             <div id="slot_thursday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>Time Slots</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">Not Available</p>
                                                             </div>

                                                             <div id="slot_friday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>Time Slots</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">Not Available</p>
                                                             </div>

                                                             <div id="slot_saturday" class="tab-pane fade">
                                                                 <h4 class="card-title d-flex justify-content-between">
                                                                     <span>Time Slots</span> 
                                                                     <a class="edit-link" data-toggle="modal" href="#add_time_slot"><i class="fa fa-plus-circle"></i> Add Slot</a>
                                                                 </h4>
                                                                 <p class="text-muted mb-0">Not Available</p>
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

				</div>

			</div>		
    </>
  )
}

export default WorkTimeTable