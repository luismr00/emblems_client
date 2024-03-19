import React from 'react'
import Navigation from '../components/Navigation'
import { Dropdown } from 'react-bootstrap'

const Account = () => {
  return (
    <div>
        <Navigation />
        <div className='container'>
          <h2>Manage Account</h2>
          <p>Change password</p>
          <p>Change username</p>
          <p>Add or change social links</p>
          <p>Manage notifications</p>
          <p>Manage privacy settings</p>
          <p>Manage payment information</p>
          <p>light/dark mode</p>
        </div>
    </div>
  )
}

export default Account