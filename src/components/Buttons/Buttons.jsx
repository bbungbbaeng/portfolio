import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const Buttons = () => (
    <div className="buttons">
        <Link to="/aboutme"><p>ABOUT ME</p></Link>
        <Link to="/projects"><p>MY PROJECTS</p></Link>
        <Link to="/contact"><p>CONTACT</p></Link>
    </div>
);

export default Buttons;