import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Calendar from '../components/MycoCalendar'
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";

const CalendarPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const heroImage = getImage(image) || image;

  return (
    <div>
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
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CalendarPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CalendarPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CalendarPageTemplate
      image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CalendarPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CalendarPage

export const calendarPageQuery = graphql`
  query CalendarPage($id: String!) {
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
