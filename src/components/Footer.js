import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/NMS-inv-trans.png'

const Footer = () => {
  const socialLinkStyles = { width: '1em', height: '1em' };
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '14em', height: '14em' }}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/join">
                      Join
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/calendar">
                      Calendar
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/newsletter">
                      Newsletter
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                      </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                      </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="facebook" href="https://www.facebook.com/groups/nemyco">
                <span className="icon">
                  <i className="fab fa-facebook" style={socialLinkStyles}></i>
                </span>
              </a>
              <a title="instagram" href="https://www.instagram.com/nebmyco/">
                <span className="icon">
                  <i className="fab fa-instagram" style={socialLinkStyles}></i>
                </span>
              </a>
              <a title="youtube" href="https://www.youtube.com/channel/UCH8awFI3fmHrWhSgAPI26Kw">
              <span className="icon">
                  <i className="fab fa-youtube" style={socialLinkStyles}></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
