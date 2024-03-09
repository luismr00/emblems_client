import React, { useState } from 'react'
import Login from '../pages/Login'

const LoginAndRegisterForm = (props) => {

  const [formDisplay, setFormDisplay] = useState("login")
  const formDisplayStyle = props.showLarForm ? "position-fixed top-50 start-50 translate-middle d-block" : "position-fixed top-50 start-50 translate-middle d-none"

  return (
    <div class={formDisplayStyle}>
        <Login />
    </div>
    // <div>LoginAndRegisterForm</div>
  )
}

export default LoginAndRegisterForm