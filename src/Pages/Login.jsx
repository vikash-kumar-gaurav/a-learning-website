import React from 'react'
import Template from '../Components/Template';
import loginImg from '../Components/loginImg.avif';

const Login = ({setisLogedin}) => {
  return (
    <>
    <Template 
      title="welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setisLogedin={setisLogedin}
      />
    </>
  )
}

export default Login