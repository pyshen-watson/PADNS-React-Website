import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const name = 'Elliot'
  const [color, setColor] = useState('blue')

  const clickHandler = () => {
    setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
  }

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval_id = setInterval(() => {
      setCounter(prev => prev+1)
    }, 1000)

    return () => {
      clearInterval(interval_id)
    }
  }, [])

  return (
    <div>
      <h1> This is the normal HTML syntax you know </h1>
      <h2> My name is {name} </h2>
      <button onClick={clickHandler}>Click me</button>
      <div style={{
        backgroundColor: color,
        height: '6rem',
        width: '6rem',
        margin: '3rem auto',
        padding: 'auto 0',
        boxSizing: 'border-box'
      }}>{color}</div>
      <div>Counter: {counter} </div>
    </div>
  )
}

export default App
