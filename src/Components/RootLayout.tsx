import { Link, Outlet } from "react-router-dom"

const pageData = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
]

export default function RootLayout() {
  return (
    <div className="bg-slate-900 h-screen">
      <nav>
        { pageData.map((data) =>
          <Link to={data.path} className="text-slate-50 mr-8">
            {data.name}
          </Link>)
        }
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
