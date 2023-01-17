import React from 'react'
import Calendar from '@ericz1803/react-google-calendar';

const calendars = [{ calendarId: process.env.CALENDAR_ID }];
const apiKey = process.env.GOOGLE_CAL_API_KEY;

const MycoCalendar = () => {
    // const publicHolidays = 'src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t' // Hack to show events. GCal isn't showing the events without a click in the iframe for some reason without this larger calendar...
    // const baseCalendarUrl = `https://calendar.google.com/calendar/embed?${encodeURI('src=nebmyco@gmail.com&ctz=America/Chicago')}`
    // const agendaCalendarUrl = `${baseCalendarUrl}${encodeURI(`&${publicHolidays}&mode=AGENDA&showTabs=0&showTitle=0&showNav=0&showDate=0`)}`
    return (
        <>
            <Calendar apiKey={apiKey} calendars={calendars} />
            {/* <div className="calendarWrapper">
                <iframe title="agenda.calendar" scrolling="no" src={agendaCalendarUrl}></iframe>
            </div> */}
        </>
    )
};
export default MycoCalendar;