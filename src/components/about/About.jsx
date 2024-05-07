import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
    return(
        <section className="about container section" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />
            
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Allan Su, a 1B computer engineering student at the University of Waterloo with. I am excited about the technical world and is excited to learn all about computer engineering.</p>
                        <a href="https://drive.google.com/file/d/1GNcma2uPTBMRNVt4jfw79ywNB74yie8-/view?usp=sharing" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">C++ Programming</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage c_prog"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Web Development</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage web"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Data Structure and Algorithms</h3>
                                <span className="skills__ number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage data"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;