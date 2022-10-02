import React from 'react';
import styles from './ErrorPage.module.scss';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({}) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <div className={styles.errorPageContainer}>
      <h1>
        Sorry, we can't seem to find the page you're looking for...
      </h1>
      <button type="button" onClick={navigateToHome}>Take Me Home</button>
    </div>
  );
};

export default ErrorPage;