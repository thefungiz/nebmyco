import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NMS-trans.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/youtube.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img className="navbar-logo-img" src={logo} />
              <h1>Nebraska Mycological Society</h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                <h2>About</h2>
              </Link>
              <Link className="navbar-item" to="/join">
                <h2>Join</h2>
              </Link>
              <Link className="navbar-item" to="/calendar">
                <h2>Calendar</h2>
              </Link>
              <Link className="navbar-item" to="/blog">
                <h2>Blog</h2>
              </Link>
              <a className="navbar-item" title="Facebook" href="https://www.facebook.com/groups/nemyco">
                <img src={facebook} alt="Facebook" className="navbar-social-icon" />
              </a>
              <a className="navbar-item" title="Instagram" href="https://www.instagram.com/nebmyco/">
                <img src={instagram} alt="Instagram" className="navbar-social-icon" />
              </a>
              <a className="navbar-item" title="YouTube" href="https://www.youtube.com/channel/UCH8awFI3fmHrWhSgAPI26Kw">
                <img src={youtube} alt="YouTube" className="navbar-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
