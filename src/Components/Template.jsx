import React from 'react'

const Template = ({title, desc1, desc2, image, formattype, setisLogedin}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formattype ==="signup" ?
            (<SignupForm />) :
            (<LoginForm />)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>Sign in with Google</button>
        </div>

        <div>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Template