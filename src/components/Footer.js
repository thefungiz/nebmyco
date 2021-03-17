import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/NMS-inv-trans.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/youtube.svg'

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
                    <Link className="navbar-item" to="/blog">
                      Blog
                      </Link>
                  </li>
                  <li>
                  <Link className="navbar-item" to="https://www.etsy.com/shop/NebMyco">
                      Shop
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
                <img
                  src={facebook}
                  alt="Facebook"
                  style={socialLinkStyles}
                />
              </a>
              <a title="instagram" href="https://www.instagram.com/nebmyco/">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={socialLinkStyles}
                />
              </a>
              <a title="youtube" href="https://www.youtube.com/channel/UCH8awFI3fmHrWhSgAPI26Kw">
                <img
                  src={youtube}
                  alt="YouTube"
                  style={socialLinkStyles}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
