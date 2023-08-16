import dynamic from 'next/dynamic'
const LoginComponent = dynamic(() => import('../component/LoginComponent/LoginComponent'), {
    ssr : false
  })
const Login = () => {
  return (
    <>
      <LoginComponent/>	
    </>
  )
}

export default Login