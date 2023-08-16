import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('./component/Banner/Banner'), {
  ssr : false
})
const ClinicCategory = dynamic(() => import('./component/Clinic-category/ClinicCategory'), {
  ssr : false
})
const BookDoctor = dynamic(() => import('./component/BookDoctor/BookDoctor'), {
  ssr : false
})

const page = () => {
  return (
    <>
      <Banner/>
      <ClinicCategory/>
      <BookDoctor/>
    </>
  )
}

export default page