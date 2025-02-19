import React from 'react'

export default function Increment({ count, setCount }) {
  function increaseCount() {
    setCount(++count);
  }
  return (
    <div>
      <button onClick={increaseCount}>Increment</button>
    </div>
  )
}
