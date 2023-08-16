import dynamic from 'next/dynamic'

const DoctorProfile = dynamic(() => import('../component/DoctorProfile/DoctorProfile'), {
    ssr : false
  })
const page = () => {
  return (
    <>
        <DoctorProfile/>
    </>
  )
}

export default page