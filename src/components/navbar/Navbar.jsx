import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate()

  const { user, dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user && (
          <>
            <div className="navItems">
              {user.username}
              <button onClick={handleLogout} className="navButton">
                Logout
              </button>
            </div>
          </>
        )}
        {!user && (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
