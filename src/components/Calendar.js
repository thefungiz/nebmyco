import React from 'react'

const Calendar = () => {
    const baseCalendarUrl = `https://calendar.google.com/calendar/embed?${encodeURI('src=nebmyco@gmail.com&ctz=America/Chicago')}`
    const agendaCalendarUrl = `${baseCalendarUrl}${encodeURI('&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showDate=0')}`
    return (
        <>
            <div className="calendarWrapper">
                <iframe title="basic.calendar" src={baseCalendarUrl}></iframe>
            </div>
            <div className="calendarWrapper">
                <iframe title="agenda.calendar" src={agendaCalendarUrl}></iframe>
            </div>
        </>
    )
};
export default Calendar;