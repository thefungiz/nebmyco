import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import EventsRoll from '../components/EventsRoll';
import { Helmet } from 'react-helmet'

const EventsPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const heroImage = getImage(image) || image;
  const description = "Events from the Nebraska Mycological Society";

  return (
    <div>
      <Helmet>
        <title>Nebraska Mycological Society | Events</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <FullWidthImage img={heroImage} title={title} subheading="" />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
                <h3 className="has-text-weight-semibold is-size-4">
                  Upcoming Events
                </h3>
                <br/>
                <EventsRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/past-events">Past events</Link>
                </div>
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/events/text">Text Version</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

EventsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventsPageTemplate
      image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage

export const EventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
