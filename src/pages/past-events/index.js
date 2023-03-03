import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../../components/Layout'
import PastEventsRoll from '../../components/PastEventsRoll'

export default class PastEventsPage extends React.Component {
  render() {
    const description = "Past events from the Nebraska Mycological Society";
    return (
      <Layout>
        <Helmet>
          <title>Nebraska Mycological Society | Past Events</title>
          <meta name="description" content={description} />
          <meta property="og:title" content="Past Events 🍄" />
          <meta property="og:description" content={description} />
        </Helmet>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Past Events 🍄
                  </h2>
                  <PastEventsRoll />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
