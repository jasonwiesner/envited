import React, { useEffect, useState } from 'react';
import styles from './EventPage.module.scss';
import { CgCalendarDates } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { BsChevronRight } from 'react-icons/bs';
import { monthsMap } from '../utils/monthsMap';
const EventPage = ({
  state
}) => {
  const [eventState, setEventState] = useState({
    fromDateNumber: '',
    fromDateMonth: '',
    fromDateReadableTime: '',
    toDateNumber: '',
    toDateMonth: '',
    toDateReadableTime: ''
  });
  const getDateNumber = (dateObj) => dateObj.toString().slice(8, 10);
  const getDateMonth = (dateObj) => monthsMap[dateObj.toString().slice(4, 7)];
  const getDateTime = (dateObj) => {
    const time = dateObj.toString().slice(16, 21);
    const hours = time[0] === '0' ? time.slice(1, 2) : time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const meridiem = hours < 12 ? 'AM' : 'PM';
    const dateTime = `${hours}:${minutes}${meridiem}`;
    return dateTime;
  };
  useEffect(() => {
    const fromDateNumber = getDateNumber(state.fromDateTime);
    const fromDateMonth = getDateMonth(state.fromDateTime);
    const fromDateReadableTime = getDateTime(state.fromDateTime);
    const toDateNumber = getDateNumber(state.toDateTime);
    const toDateMonth = getDateMonth(state.toDateTime);
    const toDateReadableTime = getDateTime(state.fromDateTime);
    setEventState({
      fromDateNumber,
      fromDateMonth,
      fromDateReadableTime,
      toDateNumber,
      toDateMonth,
      toDateReadableTime
    }); 
  }, []);
  return (
    <div className={styles.eventContainer}>
      <img src={state.eventImageUrl} />
      <div className={styles.eventInfo}>
        <h1>{state.eventName}</h1>
        <p>Hosted by <span className={styles.hostName}>{state.hostName}</span></p>
        <div className={styles.dateLocation}>
          <div className={styles.iconBackground}>
            <CgCalendarDates className={styles.calendarIcon}/>
          </div>
          <div className={styles.date}>
            <span className={styles.fromDate}>
              {eventState.fromDateNumber}   {eventState.fromDateMonth}  {eventState.fromDateReadableTime}
            </span>
            <div>
            to 
            <span className={styles.toDateSpan}>
              {' '}{eventState.toDateNumber} {eventState.toDateMonth} {eventState.toDateReadableTime}
            </span>
            {' '}UTC +10
            <BsChevronRight className={styles.rightCaretIcon}/>
            </div>
          </div>
        </div>
        <div className={styles.dateLocation}>
          <div className={styles.iconBackground}>
            <GrLocation className={styles.locationIcon}/>
          </div>
          <div className={styles.toDate}>
            <span className={styles.street}>{state.streetName}</span>
            <span>{state.suburb}, {state.state},{state.postCode}</span>
          </div>
          <BsChevronRight className={styles.rightCaretIcon2}/>
        </div>
      </div>
    </div>
  );
};

export default EventPage;