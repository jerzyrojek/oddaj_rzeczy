import React from 'react';
import decoration from "../assets/Decoration.svg";
import heroImage from "../assets/HeroImage.png";
import heroImage2 from "../assets/HeroImage@2x.png";

const Header = () => {
    return (
        <header className="mainHeader container">
            <div className="mainHeader__image">
                <img srcSet={`${heroImage} 1x, ${heroImage2} 2x`} alt="banner"/>
            </div>
            <div className="mainHeader__text">
                <h1><span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div>
                    <button>Oddaj Rzeczy</button>
                    <button>Zorganizuj zbiorkę</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
