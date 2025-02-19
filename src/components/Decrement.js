import React from 'react'

export default function Decrement({ count, setCount }) {
  function decreaseCount() {

    if (count === 0) {
      alert("it make count negative")
    }
    else {
      setCount(--count);
    }

  }
  return (
    <div>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  )
}
