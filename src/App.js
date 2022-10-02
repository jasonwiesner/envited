import React, { useState } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateEventPage from './pages/CreateEventPage';
import EventPage from './pages/EventPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [state, setState] = useState({
    eventName: '',
    hostName: '',
    fromDateTime: '',
    toDateTime: '',
    streetName: '',
    suburb: '',
    state: '',
    postCode: '',
    eventImageUrl: ''
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEventPage setState={setState}/>} />
          <Route path="/event" element={<EventPage state={state}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
