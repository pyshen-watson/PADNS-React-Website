import { useState } from "react"

export default function Clickme(props:any){

    const [color, setColor] = useState('blue')
    const clickHandler = () => {
      setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <button onClick={clickHandler}>Click me</button>
            <div style={{
                backgroundColor: color,
                height: '6rem',
                width: '6rem',
                margin: '3rem auto',
                padding: 'auto 0',
                boxSizing: 'border-box'
            }}>{color}</div>
        </>
    )
}
