import Image from 'next/image'
import firstImage from '/public/banner-0-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const FirstBanner = () => {
  return (
    <section className="banner-section">
    <div className='first-banner'>
	<div className="container" style={{height : '95vh'}}>
		<div className="row align-items-center align-content-center py-3 h-100 " style={{direction : 'rtl'}}>
			<div className="col-md-6 col-12">
				<div className='banner-info'>
					<h1>ابحث عن طبيب
						<br/>
						<span> رعاية صحية لحياة أفضل ليك </span>
					</h1>
				</div>
		<div>
			<h4 className='banner-btn'>
			<FontAwesomeIcon icon={faStethoscope} />
			<span>
			حلول جديدة لرعاية أفضل ليك

			 </span>
			</h4>
			<h4 className='banner-btn'>
			<FontAwesomeIcon icon={faHouseChimneyMedical} />
			 <span>
			 حجزك مؤكد مع الدكتور

			  </span>
			</h4>
			<p className='banner-p'>اكتشف أفضل الأطباء والعيادات والمستشفيات في المدينة الأقرب إليك.</p>
		</div>
			</div>
			<div className="col-md-6 col-12">
			  <Image src={firstImage} alt='firstImage' style={{width : '100%', height : '100%'}} />
			</div>
		</div>
	  </div>
	</div>

    </section>

  )
}

export default FirstBanner