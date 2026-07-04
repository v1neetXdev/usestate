import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(0)
  function increase() {
    setNum(Num+1)
  }
  function decrease() {
    setNum(Num-1)
  }
  function reset() {
    setNum(0)
  }
  return (
    <div className='box'>
      <p>Counter is : {Num}</p>
      <button onClick = {increase}>increase</button>
      <button onClick = {decrease}>decrease</button>
      <div className='reset'>
        <button onClick = {reset}>Reset</button>
      </div>
    </div>
  )
}
export default App
