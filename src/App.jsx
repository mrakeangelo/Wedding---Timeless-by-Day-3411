import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import Details from './components/Details/Details';
import Menu from './components/Menu/Menu';
import Schedule from './components/Schedule/Schedule';
import Countdown from './components/Countdown/Countdown';
import Gallery from './components/Gallery/Gallery';
import RSVP from './components/RSVP/RSVP';
import Guestbook from './components/Guestbook/Guestbook';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Story />
          <Details />
          <Menu />
          <Schedule />
          <Countdown />
          <Gallery />
          <RSVP />
          <Guestbook />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;