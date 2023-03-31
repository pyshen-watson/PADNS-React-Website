import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
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
      <nav className='navbar'>
        {
          PageList.map(page =>
            <div className="link">
              <NavLink to={page.path}>{page.name}</NavLink>
            </div>)
        }
      </nav>
      <Routes>
        {PageList.map(page => <Route path={page.path} element={page.element} />)}
      </Routes>
    </>
  )
}

export default App
