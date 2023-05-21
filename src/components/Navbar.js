import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NMS-trans.png'

const Navbar = class extends React.Component {
  constructor() {
    super();
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
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img style={{height: '4em'}} alt="logo" className="navbar-logo-img" src={logo} />
              <h1 style={{fontWeight: 'bold'}}>Nebraska Mycological Society</h1>
            </Link>
            {/* Hamburger menu */}
            {/* eslint-disable-next-line */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
                <span className="increase" />
                <span className="increase" />
                <span className="increase" />
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
              <Link className="navbar-item" to="/events">
                <h2>Events</h2>
              </Link>
              <Link className="navbar-item" to="/newsletter">
                <h2>Newsletter</h2>
              </Link>
              <Link className="navbar-item" to="/blog">
                <h2>Blog</h2>
              </Link>
              <Link className="navbar-item" to="https://forms.gle/rXPAqG81yALSjDoi6">
                <h2>Contact Us</h2>
              </Link>
              <Link className="navbar-item" to="https://givebutter.com/V4vFBB">
                <h2>Donate</h2>
              </Link>
              <a className="navbar-item" title="Facebook" href="https://www.facebook.com/groups/nemyco">
                <span className="icon">
                  <i className="fab fa-facebook fa-2x"></i>
                </span>
              </a>
              <a className="navbar-item" title="Instagram" href="https://www.instagram.com/nebmyco/">
              <span className="icon">
                  <i className="fab fa-instagram fa-2x"></i>
                </span>
              </a>
              <a className="navbar-item" title="YouTube" href="https://www.youtube.com/channel/UCH8awFI3fmHrWhSgAPI26Kw">
              <span className="icon">
                  <i className="fab fa-youtube fa-2x"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
