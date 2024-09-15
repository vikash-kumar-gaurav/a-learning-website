import React from 'react'
import signupImg from '../Components/signupImg.avif';
import Template from '../Components/Template';

const Signup = ({setisLogedin}) => {
  return (
    <>
    <Template 
      title="Here you are , welcome"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setisLogedin={setisLogedin}
      />
    </>
  )
}

export default Signup