import dynamic from 'next/dynamic'
const RegisterComponent = dynamic(() => import('../component/RegisterComponent/RegisterComponent'), {
    ssr : false
  })
const page = () => {
  return (
    <>
        <RegisterComponent/>
    </>
  )
}

export default page