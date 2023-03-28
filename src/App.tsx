import './App.css'
import Welcome from './Components/Welcome'
import Clickme from './Components/Clickme'
import Counter from './Components/Counter'

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
