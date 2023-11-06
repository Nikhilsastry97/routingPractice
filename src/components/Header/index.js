// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="header-logo"
        alt="wave"
      />
      <h1 className="header-title">Wave</h1>
    </div>

    <ul className="nav-list-item">
      <li className="link-item">
        <Link className="router-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="router-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="router-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
