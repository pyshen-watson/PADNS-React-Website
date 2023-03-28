import { useState, useEffect } from 'react'


export default function Counter() {

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
    <div>Counter: {counter}</div>
  )
}
