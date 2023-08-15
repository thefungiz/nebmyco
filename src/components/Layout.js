import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { initializeGiveButter } from './Givebutter';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  useEffect(() => {
    initializeGiveButter(window);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.givebutter.com/elements/latest.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <html className="has-navbar-fixed-top" lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        {/* <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#0F2F7C" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {/* removing to see if it fixes preview problems on iphone <meta property="og:url" content="/" /> */}
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" /> 
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
