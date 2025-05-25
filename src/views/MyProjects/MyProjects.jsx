import React from 'react';
import { Link } from 'react-router-dom';
import './MyProjects.css';

const MyProjects = () => {
    return (
        <div className="projects-view">
            <p className="projects-text">EMPTY</p>
            <Link to="/">
                <p className="back-button">BACK</p>
            </Link>
        </div>
  );
};

export default MyProjects;