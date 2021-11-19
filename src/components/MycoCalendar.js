import React from 'react'
import Calendar from '@ericz1803/react-google-calendar';

const calendars = [{ calendarId: process.env.CALENDAR_ID }];
const apiKey = process.env.GOOGLE_CAL_API_KEY;

const MycoCalendar = () => {
    const baseCalendarUrl = `https://calendar.google.com/calendar/embed?${encodeURI('src=nebmyco@gmail.com&ctz=America/Chicago')}`
    const agendaCalendarUrl = `${baseCalendarUrl}${encodeURI('&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showDate=0')}`
    return (
        <>
            <Calendar apiKey={apiKey} calendars={calendars} />
            <div className="calendarWrapper">
                <iframe title="agenda.calendar" src={agendaCalendarUrl}></iframe>
            </div>
        </>
    )
};
export default MycoCalendar;