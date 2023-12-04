import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { GatsbyImage } from "gatsby-plugin-image";

import { Helmet } from 'react-helmet'

const EventTemplate = ({
  content,
  contentComponent,
  description,
  title,
  featuredimage,
  formattedDateTime,
  locationName,
  locationAddress,
  locationMapLink,
  locationEmbeddedSrc,
  showImage,
  rsvpLink,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <Helmet titleTemplate="%s | Event">
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featuredimage.publicURL} />
      </Helmet>
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          {showImage && (
              <GatsbyImage
                image={featuredimage.childImageSharp.gatsbyImageData}
                style={{marginTop: "1em"}}
                alt={title}
              />
            )}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {formattedDateTime && (
              <>
                <h3>When</h3>
                <p>{formattedDateTime}</p>
              </>
            )}
            {rsvpLink && (
              <>
                <h3>RSVP</h3>
                <a class="myco-link" target="_blank" href={rsvpLink}>Click here to RSVP</a>
              </>
            )}
            <h3>Summary</h3>
            <p>{description}</p>
            <div className="blog-post-content"><PostContent content={content} /></div>
            {(locationName || locationAddress) && (
              <>
                <h3>Where</h3>
                {locationName && (<p>{locationName}</p>)}
                {locationAddress && (<p>{locationAddress} {locationMapLink && (<>(<a style={{color:"blue", fontWeight:"bold"}} target="_blank" rel="noreferrer" href={locationMapLink}>map</a>)</>)}</p>)}
                {locationEmbeddedSrc && (<iframe title="location" src={locationEmbeddedSrc} width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>)}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

EventTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.string,
  formattedDateTime: PropTypes.string,
  locationName: PropTypes.string,
  locationAddress: PropTypes.string,
  locationMapLink: PropTypes.string,
  locationEmbeddedSrc: PropTypes.string,
  showImage: PropTypes.bool,
  rsvpLink: PropTypes.string,
}

const Event = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        formattedDateTime={post.frontmatter.formattedDateTime}
        locationName={post.frontmatter.locationName}
        locationAddress={post.frontmatter.locationAddress}
        locationMapLink={post.frontmatter.locationMapLink}
        locationEmbeddedSrc={post.frontmatter.locationEmbeddedSrc}
        showImage={post.frontmatter.showImage}
        rsvpLink={post.frontmatter.rsvpLink}
      />
    </Layout>
  )
}

Event.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Event

export const pageQuery = graphql`
  query EventByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        formattedDateTime
        locationName
        locationAddress
        locationMapLink
        rsvpLink
        locationEmbeddedSrc
        showImage
        title
        description
        tags
        featuredimage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
