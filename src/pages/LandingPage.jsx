import React from 'react';
import styles from './LandingPage.module.scss';
import { ReactComponent as LandingPageImage } from '../assets/landing-page-image.svg';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({}) => {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate('/create');
  };
  return (
    <div className={styles.landingPageContainer}>
      <h1>
        Imagine if 
        <div>Snapchat</div> 
        had events.
      </h1>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <LandingPageImage className={styles.image}/>
      <button type="button" onClick={navigateToCreate}>
        🎉 Create my event
      </button>
    </div>
  );
};

export default LandingPage;