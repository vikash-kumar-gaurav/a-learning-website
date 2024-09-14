import React from 'react'
import SignupForm from '../Forms/SignupForm'
import LoginForm from '../Forms/LoginForm'


const Template = ({title, desc1, desc2, image, formType, setisLogedin}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formType ==="signup" ?
            (<SignupForm setisLogedin={setisLogedin}/>) :
            (<LoginForm setisLogedin = {setisLogedin}/>)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>Sign in with Google</button>
        </div>

        <div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Template