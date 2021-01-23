import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Calendar = ({ }) => {
    const calendarUrl = 'https://calendar.google.com/calendar/embed?src=' + encodeURI('nebmyco@gmail.com')
    return (<div className="calendarWrapper">
        <iframe className="calendar" src={calendarUrl} width="1200" height="600" frameborder="0" scrolling="no"></iframe>
    </div>)
}

Calendar.propTypes = {
}

export default Calendar