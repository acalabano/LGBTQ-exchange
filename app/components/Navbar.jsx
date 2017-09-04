import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Login from 'APP/app/components/Login'
import WhoAmI from 'APP/app/components/WhoAmI'
/* -----------------    COMPONENT     ------------------ */

const NavbarComp = ({ auth }) => {
  return (
        <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top" style={{display: 'flex'}}>
          <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/experiences">EXPERIENCES</Link></li>
            <li><Link to="/questions">QUESTIONS</Link></li>
          </ul>
          </div>
          <div className="login-navbar">
            <WhoAmI auth={auth} />
          </div>
        </nav>

  )
}

export default NavbarComp
