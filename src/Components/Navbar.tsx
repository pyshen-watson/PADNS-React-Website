import { Link } from 'react-router-dom'
import './Navbar.scss'

type Page = {
    name: string
    path: string
    element: JSX.Element
}

type props = {
    PageList: Page[]
}


export default function Navbar(props: props) {

    return (
        <nav className='navbar'>
            {
                props.PageList.map(page =>
                    <div className="link">
                        <Link to={page.path}>{page.name}</Link>
                    </div>)
            }
        </nav>
    )
}
