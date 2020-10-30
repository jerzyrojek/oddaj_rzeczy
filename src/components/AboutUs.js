import React from 'react';
import decoration from "../assets/Decoration.svg";
import people from "../assets/People.jpg";
import signature from "../assets/Signature.svg";

const AboutUs = () => {
    return (
        <section className="about" id="about-us">
            <div className="about__text">
                <h1>O nas</h1>
                <img className="decoration" src={decoration} alt="decoration"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="about__text-signature" src={signature} alt="signature"/>
            </div>
            <div className="about__image">
                <img src={people} alt="people"/>
            </div>
        </section>
    );
};

export default AboutUs;
