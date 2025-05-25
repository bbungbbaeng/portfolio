import React from 'react';
import { Link } from 'react-router-dom';

import CatAnimation from '../../components/CatAnimation/CatAnimation';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme-view">
            <CatAnimation speed={150} />
            <div className="text-box1">
                <span className="text1">Self Introduction</span>
                <span className="text2">
                I love playful, even seemingly pointless things,<br/>
                and I’m passionate about development driven by design.
                </span>
            </div>
            <div className="text-box2">
                <span className="text1">Values</span>
                <span className="text2">
                I place great importance on attending to every little detail in my designs.
                </span>
            </div>
            <div className="text-box3">
                <span className="text1">Strengths</span>
                <span className="text2">
                I’m meticulous and deliberate in everything I do.
                </span>
            </div>
            <div className="text-box4">
                <span className="text1">Education</span>
                <span className="text2">
                Division of Economics, Hankuk University of Foreign Studies.
                </span>
            </div>
            <div className="text-box5">
                <span className="text1">Tech Stack</span>
                <div className="text-wrapper">
                <span className="text2">Python3</span>
                <span className="text3">C plus plus</span>
                </div>
            </div>
            <div className="text-box6">
                <span className="text1">Tools</span>
                <div className="text-wrapper">
                <span className="text2">Photoshop</span>
                <span className="text3">Illustrator</span>
                <span className="text4">Blender</span>
                <span className="text5">Figma</span>
                </div>
            </div>
            <Link to="/">
                <p className="back-button">BACK</p>
            </Link>
        </div>
  );
};

export default AboutMe;