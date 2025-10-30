import { Outlet, useLocation, Link } from "react-router-dom"
import "./Layout.css"

export default function Layout({ addToast }) {
  const location = useLocation()
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.startsWith(path)) return true
    return false
  }
  return (
    <div className="layout layout-row">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h1 className="brand-title">TALENTFLOW</h1>
          <span className="brand-subtitle">A MINI HIRING PLATFORM</span>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className={`sidebar-link${isActive("/") ? " active" : ""}`}>Jobs</Link>
          <Link to="/candidates" className={`sidebar-link${isActive("/candidates") ? " active" : ""}`}>Candidates</Link>
          <Link to="/assessments" className={`sidebar-link${isActive("/assessments") ? " active" : ""}`}>Assessments</Link>
        </nav>
        <div className="sidebar-user">
          <span>Admin</span>
        </div>
      </aside>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
