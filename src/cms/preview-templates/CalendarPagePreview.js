import React from 'react'
import PropTypes from 'prop-types'
import { CalendarPageTemplate } from '../../templates/calendar-page'

const CalendarPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (<CalendarPageTemplate
    image={getAsset(data.image)}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />)
}

CalendarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default CalendarPagePreview
