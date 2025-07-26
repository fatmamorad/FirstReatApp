import React from 'react'
import { NavLink } from 'react-router-dom' // ✅ الصح
import './NavBar.css'
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg py-4 px-2 bg-info">
      <div className="container">
        <a className="navbar-brand rounded-2" href="#">START FRAMEWORK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="port">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
