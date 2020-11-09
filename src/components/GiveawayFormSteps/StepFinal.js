import React from 'react';
import decoration from "../../assets/Decoration.svg";

const StepFinal = () => {
    return (
        <>
            <div className="giveawayForm__inputs">
                <div className="stepFinal container">
                    <div>
                        <h1>Dziękujemy za przesłanie formularza. <span>Na maila prześlemy wszelkie</span> <span>informacje o odbiorze.</span></h1>
                        <img src={decoration} alt="decoration"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepFinal;
