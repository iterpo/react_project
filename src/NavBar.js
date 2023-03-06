import React from "react"
import { Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title" >
        Dashboard
      </Link>

      <Link to="/courses" className="site-title" >
        Courses
      </Link>

      <Link to="/add_new_course" className="site-title" >
        AddNewCourse
      </Link>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }