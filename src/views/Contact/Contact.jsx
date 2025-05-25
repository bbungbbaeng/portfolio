import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-view">
            <a href="https://github.com/bbungbbaeng" className="contact-text1" target="_blank" rel="noopener noreferrer">
                Github
            </a>
            <span className="contact-text2">and</span>
            <span className="contact-text3">Gmail</span>
            <span className="contact-text4">hobakggulmatna@gmail.com</span>
            <Link to="/">
                <p className="back-button">BACK</p>
            </Link>
        </div>
    );
};

export default Contact;