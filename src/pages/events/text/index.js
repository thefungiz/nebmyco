import React from 'react'

import Layout from '../../../components/Layout'
import EventsRollText from '../../../components/EventsRollText'

export default class EventsTextIndex extends React.Component {
  render() {
    return (
      <Layout>
        {/* <Helmet>
          <title>Nebraska Mycological Society | Upcoming Events Text</title>
          <meta name="description" content={description} />
          <meta property="og:title" content="Upcoming Events Text" />
          <meta property="og:description" content={description} />
        </Helmet> */}
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/people/mushroom_circle.webp')`
          }}
        >
        </div> */}
        <section className="section section--gradient">
          <div className="container">
            <EventsRollText />
          </div>
        </section>
      </Layout>
    )
  }
}
