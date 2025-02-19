import React, { useState } from 'react'
import LoginView from './LoginView'
import LogoutView from './LogoutView'

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  function toggleFunc() {
    setToggle(!toggle);
  }

  return (
    <div>
      <p>This is Toggle component with default with Login view</p>
      <button onClick={toggleFunc}>toggle</button>
      {toggle ? <LogoutView /> : <LoginView />}

    </div>
  )
}
