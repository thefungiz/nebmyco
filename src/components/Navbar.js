import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NMS-trans.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/youtube.svg'
import discord from '../img/social/discord.png'
import donate from '../img/donate.svg'

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
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img alt="logo" className="navbar-logo-img" src={logo} />
              <h1 className="is-hidden-touch">Nebraska Mycological Society</h1>
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
              <a className="navbar-item" title="Discord" href="https://discord.gg/bkHTemVyNP">
                <img src={discord} alt="Discord" className="navbar-social-icon" />
              </a>
              <a className="navbar-item" title="Donate" href="https://www.paypal.com/donate?hosted_button_id=HPX3GSKB5VEXL">
                <img src={donate} alt="Donate" className="navbar-donate-icon" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
