import { Link } from 'react-router-dom'
import './Navbar.scss'

interface Page {
    name: string
    path: string
    element: JSX.Element
}

export default function Navbar(props: any) {

    const PageList: Page[] = props.PageList

    return (
        <nav className='navbar'>
            {
                PageList.map(page =>
                    <div className="link">
                        <Link to={page.path}>{page.name}</Link>
                    </div>)
            }
        </nav>
    )
}
