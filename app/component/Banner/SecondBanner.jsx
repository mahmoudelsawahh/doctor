import Image from 'next/image'
import secBannerImage from '/public/banner-11-bg.png'
import secImage from '/public/image-11.png'
const SecondBanner = () => {
  return (
	<section className='banner-section'>
		<div className='second-banner position-relative'>
		  <Image src={secBannerImage} alt='secBannerImage' fill objectFit='cover' objectPosition='center'/>
			<div className='container' style={{height : '100vh', direction : 'rtl'}}>
				<div className="row align-items-center align-content-center py-3 h-100">
				<div className="col-md-6 col-12 position-relative">
				  <div className='sec-banner-content'>
					<span>رعاية صحية لحياة أفضل ليك</span>
					<h1>احجز استشارات طبية بسهولة مع اكبر شبكة دكاترة فى مصر</h1>
					<button type="button" class="btn sec-banner-btn">احجز الان</button>
				  </div>
				</div>
				<div className="col-md-6 col-12 my-5 my-md-0">
				<Image src={secImage} alt='secImage' style={{width : '100%', height : '100%', position : 'relative'}} />
				</div>
			</div>
			</div>
		</div>
	</section>
  )
}

export default SecondBanner