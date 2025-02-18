import React, { useState } from 'react'

export default function Parent() {

    const [message, setMessage]=useState("this is intial message")
  return (
    <div>
        <p>This is parent component</p>
        <p>message: {message}</p>
        <input type='text' placeholder='write the message' onChange={(e)=>{setMessage(e.target.value)}}/>

    </div>
  )
}
