import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('./Banner/Banner'), {
  ssr : false
})
const ClinicCategory = dynamic(() => import('./Banner/Clinic-category/ClinicCategory'), {
  ssr : false
})
const BookDoctor = dynamic(() => import('./BookDoctor/BookDoctor'), {
  ssr : false
})
const Footer = dynamic(() => import('./Footer/Footer'), {
  ssr : false
})
const page = () => {
  return (
    <>
      <Banner/>
      <ClinicCategory/>
      <BookDoctor/>
      <Footer/>
    </>
  )
}

export default page