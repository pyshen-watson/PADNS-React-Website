import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Index from './Pages'
import About from './Pages/about'
import Works from './Pages/works'
import CV from './Pages/cv'
import Contact from './Pages/contact'

function App() {

  const PageList = [
    { name: "Index", path: "/", element: <Index /> },
    { name: "About", path: "/about", element: <About /> },
    { name: "Works", path: "/works", element: <Works /> },
    { name: "CV", path: "/cv", element: <CV /> },
    { name: "Contact", path: "/contact", element: <Contact /> }
  ]

  return (
    <>
      <Navbar PageList={PageList}/>
      <Routes>
        {PageList.map(page => <Route path={page.path} element={page.element} />)}
      </Routes>
    </>
  )
}

export default App
