import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content';
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";

const JoinPageTemplate = ({ title, image, content, contentComponent }) => {
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
                <iframe title="Member Signup" src="https://docs.google.com/forms/d/e/1FAIpQLScb3GAhsti1EkhRDccRitb9rT8PLCCI1iEc1CUfRdCyUyVAog/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

JoinPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const JoinPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <JoinPageTemplate
        image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

JoinPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JoinPage

export const joinPageQuery = graphql`
  query JoinPage($id: String!) {
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
