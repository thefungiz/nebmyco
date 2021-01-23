import React from 'react'
import PropTypes from 'prop-types'
import { CalendarPageTemplate } from '../../templates/calendar-page'

const CalendarPagePreview = ({ entry, widgetFor }) => (
  <CalendarPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CalendarPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CalendarPagePreview
