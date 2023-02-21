import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/people/mushroom_circle.webp')`
          }}
        >
        </div>
        <section className="section">
          <h2 class="title is-size-3 has-text-weight-bold is-bold-light">Recent Blog Posts</h2>
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
