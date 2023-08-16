import dynamic from 'next/dynamic'

const DoctorNav = dynamic(() => import('./DoctorNav'), {
  ssr : false
})
const DoctorCard = dynamic(() => import('./DoctorCard'), {
  ssr : false
})
const DoctorDescription = dynamic(() => import('./DoctorDescription'), {
  ssr : false
})

const DoctorProfile = () => {
  return (
    <>
      <DoctorNav/>
      <div className='content'>
      <div className='container'>
       <DoctorCard/>
       <DoctorDescription/>
       </div>
      </div>
    </>
  )
}

export default DoctorProfile