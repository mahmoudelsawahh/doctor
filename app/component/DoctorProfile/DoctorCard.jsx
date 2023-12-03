import Image from "next/image";
import FirstImage from "/public/doctors/doctor-thumb-01.jpg";
import SecImage from "/public/specialities/specialities-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMoneyCheckDollar, faStar } from "@fortawesome/free-solid-svg-icons";
import Image1 from "/public/features/feature-01.jpg";
import Image2 from "/public/features/feature-02.jpg";
import Image3 from "/public/features/feature-03.jpg";
import Image4 from "/public/features/feature-04.jpg";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
const DoctorCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left flex-grow-1">
              <div className="doctor-img">
                <a href="doctor-profile.html">
                  <Image
                    src={FirstImage}
                    className="img-fluid"
                    alt="User Image"
                  />
                </a>
              </div>
              <div className="doc-info-cont mx-md-3">
                <h4 className="doc-name">
                  <a href="doctor-profile.html">دكتور تامر الشافعى</a>
                </h4>
                <p className="doc-speciality">
                  دكتور الامراض الباطنية -الجهاز الهضمي والكبد
                </p>
                <h5 className="doc-department">
                  <Image
                    src={SecImage}
                    className="img-fluid"
                    alt="Speciality"
                  />
                  اسنان
                </h5>
                <div className="rating">
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faStar} color="gold" />
                  <span className="d-inline-block average-rating">(17)</span>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faLocationDot} />
                    المحلة الكبرى ,
                    الشعبية
                  </p>
                  <ul className="clinic-gallery">
                    <li>
                      <a
                        href="assets/img/features/feature-01.jpg"
                        data-fancybox="gallery"
                      >
                        <Image src={Image1} alt="Feature" height={40} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/img/features/feature-02.jpg"
                        data-fancybox="gallery"
                      >
                        <Image src={Image2} alt="Feature" height={40} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/img/features/feature-03.jpg"
                        data-fancybox="gallery"
                      >
                        <Image src={Image3} alt="Feature" height={40} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/img/features/feature-04.jpg"
                        data-fancybox="gallery"
                      >
                        <Image src={Image4} alt="Feature" height={40} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clinic-services">
                  <span style={{margin : '0px 5px'}}>حشوات الأسنان</span>
                  <span> تبييض</span>
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faThumbsUp} />
                     98%
                  </li>
                  <li>
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faComment} />
                     17 ملاحظات
                  </li>
                  <li>
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faLocationDot} />
                     المحلة الكبرى ,
                    الشعبية
                  </li>
                  <li>
                  <FontAwesomeIcon style={{margin : '0px 5px'}} icon={faMoneyCheckDollar} />
                     $200 - $150
                    <i
                      className="fas fa-info-circle"
                      data-toggle="tooltip"
                      title="Lorem Ipsum"
                    ></i>
                  </li>
                </ul>
              </div>
              <div className="clinic-booking">
                <Link className="view-pro-btn" href="/doctor-profile">
                  الصفحة الشخصية
                </Link>
                <Link className="apt-btn" href="/booking">
                  حجز موعد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorCard