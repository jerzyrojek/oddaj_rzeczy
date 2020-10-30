import React from 'react';
import decoration from "../assets/Decoration.svg";
import shirtIcon from "../assets/Icon-1.svg";
import boxIcon from "../assets/Icon-2.svg";
import searchIcon from "../assets/Icon-3.svg";
import refreshIcon from "../assets/Icon-4.svg";
import {useHistory} from "react-router-dom";

const SimpleSteps = () => {
    const history = useHistory();
    const handleClickGiveawayButton = () => {
        history.push("/logowanie");
    }


    return (
        <section className="steps" id="simple-steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <img className="steps-decoration" alt="decoration" src={decoration}/>
            <div className="steps__wrapper">
                <div className="steps__item">
                    <img src={shirtIcon} alt="shirt"/>
                    <h2>Wybierz rzeczy</h2>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__item">
                    <img src={boxIcon} alt="shirt"/>
                    <h2>Spakuj je</h2>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__item">
                    <img src={searchIcon} alt="shirt"/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="steps__item">
                    <img src={refreshIcon} alt="shirt"/>
                    <h2>Zamów kuriera</h2>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <button onClick={handleClickGiveawayButton}>
                Oddaj rzeczy
            </button>
        </section>
    );
};

export default SimpleSteps;
