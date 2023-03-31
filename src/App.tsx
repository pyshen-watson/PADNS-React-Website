import { Routes, Route } from 'react-router-dom'
import Navbar from '@Components/Navbar'

import Index from '@Page/index'
import About from '@Page/about'
import Works from '@Page/works'
import CV from '@Page/cv'
import Contact from '@Page/contact'

function App() {

  const PageList = [
    { name: "Home", path: "/", element: <Index /> },
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
