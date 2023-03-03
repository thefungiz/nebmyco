import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default class BlogIndexPage extends React.Component {
  render() {
    const description = "Recent blog posts from the Nebraska Mycological Society";
    return (
      <Layout>
        <Helmet>
          <title>Nebraska Mycological Society | Recent Blog Posts</title>
          <meta name="description" content={description} />
          <meta property="og:title" content="Recent Blog Posts 🍄" />
          <meta property="og:description" content={description} />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/people/mushroom_circle.webp')`
          }}
        >
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Recent Blog Posts 🍄
                  </h2>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/tags">Categories</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
