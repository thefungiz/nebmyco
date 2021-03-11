import React from 'react'
import PropTypes from 'prop-types'

const Calendar = ({ }) => {
    const baseCalendarUrl = `https://calendar.google.com/calendar/embed?${encodeURI('src=nebmyco@gmail.com&ctz=America/Chicago')}`
    const agendaCalendarUrl = `${baseCalendarUrl}${encodeURI('&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showDate=0')}`
    return (
        <>
            <div className="calendarWrapper">
                <iframe src={baseCalendarUrl}></iframe>
            </div>
            <div className="calendarWrapper">
                <iframe src={agendaCalendarUrl}></iframe>
            </div>
        </>
    )
}

Calendar.propTypes = {
}

export default Calendar