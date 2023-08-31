import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import FullWidthImage from "../components/FullWidthImage";
import EventsRoll from '../components/EventsRoll';
import { Helmet } from 'react-helmet';

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Helmet>
        <title>Nebraska Mycological Society | Home</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <p>👉 Submit a mushroom identification request <a class="myco-link" target="_blank" href="https://forms.gle/Lz6f6n63Pn4S3YBM9">here</a></p>
                  <Features gridItems={intro.blurbs} />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Upcoming Events 🍄
                    </h3>
                    <EventsRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/events">
                        See more
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories 🍄
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
            title
            link
          }
        }
      }
    }
  }
`;