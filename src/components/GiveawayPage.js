import React from 'react';
import Contact from "./Contact";
import decoration from "../assets/Decoration.svg";
import formBanner from "../assets/Form-Hero-Image.jpg";
import GiveawayForm from "./GiveawayForm";

const GiveawayPage = () => {
    return (
        <div className="giveawayPage">
            <header className="container">
                <div className="giveawayPage__image">
                    <img alt="banner" src={formBanner}/>
                </div>
                <div className="giveawayPage__text">
                    <h1>Oddaj rzeczy, których już nie chcesz <span>potrzebującym</span></h1>
                    <img src={decoration} alt="decoration"/>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className="giveawayPage__steps">
                        <p><span>1</span>Wybierz <span>rzeczy</span></p>
                        <p><span>2</span>Spakuj je <span>w worki</span></p>
                        <p><span>3</span>Wybierz <span>fundację</span></p>
                        <p><span>4</span>Zamów <span>kuriera</span></p>
                    </div>
                </div>
            </header>
            <GiveawayForm/>
            <Contact/>
        </div>
    );
};

export default GiveawayPage;
