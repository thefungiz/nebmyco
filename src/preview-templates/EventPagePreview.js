import React from 'react'
import PropTypes from 'prop-types'
import { EventTemplate } from '../../templates/event-page'

const EventPreview = ({ entry, getAsset, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const data = entry.getIn(['data']).toJS()
  return (
    <EventTemplate
      image={getAsset(data.image)}
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default EventPreview