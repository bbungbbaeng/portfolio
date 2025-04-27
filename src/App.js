import React, {useRef} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { SwitchTransition, CSSTransition} from 'react-transition-group';

import './App.css';
import NameTag from './components/NameTag';
import Buttons from './components/Buttons';
import CatAnimation from './components/CatAnimation';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={400} mountOnEnter unmountOnExit>
        <div ref={nodeRef} className="route-wrapper">
          <Routes location={location}>
            <Route path="/" element={
              <div className="App">
                <NameTag />
                <Buttons />
                <CatAnimation speed={150} />
              </div>
            } />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;