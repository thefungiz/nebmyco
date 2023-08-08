import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'
import moment from 'moment';

const EventsRollTextTemplate = (props) => {
  const { edges } = props.data.allMarkdownRemark;
  const yesterday = moment().subtract(1, 'day');
  const posts = Array.from(edges)
    .filter(({node: x}) => !x.frontmatter.isDraft)
    .filter(({node: x}) => moment(x.frontmatter.date, "MMMM DD, YYYY").isAfter(yesterday));

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <h2><b>{post.frontmatter.title} - {post.frontmatter.date}</b></h2>
            <p>{post.frontmatter.description} More details here - <Link to={post.fields.slug}>{`${typeof window !== 'undefined' ? `${window.location.origin}${post.fields.slug}` : ''}`}</Link></p>
            <br />
          </div>
        ))}
    </>
  )
}

EventsRollText.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function EventsRollText() {
  return (
    <StaticQuery
      query={graphql`
        query EventsRollQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "event-page" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  templateKey
                  isDraft
                  date(formatString: "MMMM DD, YYYY")
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <EventsRollTextTemplate data={data} count={count} />}
    />
  );
}