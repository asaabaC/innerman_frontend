import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navigation';
import About from './components/about';
import Contact from './components/contact';
import Admissions from './components/admissions';
import Applications from './components/applications';
import Gallery from './components/gallery';
import NoPage from './components/noPage';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderSlideshow from './components/slideShow';
import Footer from './components/footer';
import Events from './components/events';

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div className="App">
      {!isDashboardPage && (
        <>
          <header className="App-header">
            <NavBar />
            <HeaderSlideshow />
            <div className="header-content">
              <div className="header-flex-container">
                <p className="innerman-school">INNERMAN PRE & PRIMARY SCHOOL</p>
                <button
                  className="apply-button"
                  onClick={() => window.location.assign('/applications')}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </header>
        </>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
