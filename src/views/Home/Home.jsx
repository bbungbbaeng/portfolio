import React from "react";

import NameTag from "../../components/NameTag/NameTag";
import Buttons from "../../components/Buttons/Buttons";
import CatAnimation from "../../components/CatAnimation/CatAnimation";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <NameTag />
            <Buttons />
            <CatAnimation />
        </div>
    )
}

export default Home;