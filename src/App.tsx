import './App.css'
import Welcome from './Component/Welcome'
import Clickme from './Component/Clickme'
import Counter from './Component/Counter'

function App() {

  const name = 'Elliot'

  return (
    <div>
      <Welcome name={name}/>
      <Clickme/>
      <Counter/>
    </div>
  )
}

export default App
