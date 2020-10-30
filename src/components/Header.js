import React from 'react';
import decoration from "../assets/Decoration.svg";
import heroImage from "../assets/HeroImage.png";
import heroImage2 from "../assets/HeroImage@2x.png";
import {useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const handleButtonClicked = () => {
        history.push("/logowanie");
    }

    return (
        <header className="mainHeader container">
            <div className="mainHeader__image">
                <img srcSet={`${heroImage} 1x, ${heroImage2} 2x`} alt="banner"/>
            </div>
            <div className="mainHeader__text">
                <h1><span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div>
                    <button onClick={handleButtonClicked}>Oddaj Rzeczy</button>
                    <button onClick={handleButtonClicked}>Zorganizuj zbiorkę</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

