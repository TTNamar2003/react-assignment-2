import React, { useState } from 'react'
import Increment from './Increment';
import Decrement from './Decrement';

export default function Counter() {
    const[count , setCount]=useState(0);

  return (
    <div>
       <h1>Counter</h1>
       <p>This is count :{count} </p>
       <Increment count={count} setCount={setCount}/>
       <br/>
       <Decrement count={count} setCount={setCount}/>

       
    </div>
  )
}
