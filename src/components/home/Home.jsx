import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Allan Su</h1>
                <span className="home__education">I'm a Computer Engineering student at UWaterloo</span>
                
                <HeaderSocials />

                <a href="https://tudourocky.github.io/" className="btn">My Blog</a>

                <ScrollDown />
            </div>

            <div>
                <Shapes />
            </div>
        </section>
    )
}

export default Home;