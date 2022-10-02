import React, { useEffect } from 'react';
import styles from './CreateEventPage.module.scss';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const CreateEventPage = ({
  setState
}) => {
  useEffect(() => {
    setState({
      eventName: '',
      hostName: '',
      fromDateTime: '',
      toDateTime: '',
      streetName: '',
      suburb: '',
      state: '',
      postCode: '',
      eventImageUrl: ''
    })
  }, [])
  const navigate = useNavigate();
  const navigateToEvent = (e) => {
    e.preventDefault();
    navigate('/event');
  }
  const setFromDateTime = ((newDateTime) => setState((state) => ({
    ...state,
    fromDateTime: new Date(newDateTime)
  })));
  const setToDateTime = ((newDateTime) => setState((state) => ({
    ...state,
    toDateTime: new Date(newDateTime)
  })));
  const updateState = ((e) => {
    const property = e.target.id;
    const value = e.target.value;
    setState((state) => ({
      ...state,
      [property]: value
    }));
  });
  return (
    <div className={styles.createEventContainer}>
      <h1>Create Your Event</h1>
      <p>
        Enter your event details below. Then click next to see your Event page.
      </p>
      <Form
      onSubmit={navigateToEvent}
      onChange={updateState}
      handleChangeFrom={setFromDateTime}
      handleChangeTo={setToDateTime}
      />
    </div>
  );
};

export default CreateEventPage;