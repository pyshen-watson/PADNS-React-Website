import { createHashRouter } from "react-router-dom"
import Index from "../Pages"
import About from "../Pages/about"
import RootLayout from "../Components/RootLayout"

const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Index /> },
            { path: "/about", element: <About /> }
        ]
    }
])

export default router