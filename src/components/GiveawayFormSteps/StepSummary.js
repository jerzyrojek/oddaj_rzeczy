import React from 'react';
import shirtIcon from "../../assets/Icon-1.svg";
import refreshIcon from "../../assets/Icon-4.svg";


const StepSummary = ({prev, data}) => {
    return (
        <>
            <div className="giveawayForm__inputs">
                <div className="stepSummary container">
                    <h1>Podsumowanie Twojej darowizny</h1>
                    <h2>Oddajesz:</h2>
                    <img src={shirtIcon} alt="shirt"/>
                        <p>{data.numberOfBags} worki, {data.itemCategory}, {[...data.helpGroups].join(", ")}</p>
                    <img src={refreshIcon} alt=""/>
                        <p>dla lokalizacji: {data.location}</p>

                    <h2>Adres odbioru:</h2>
                    <p>Ulica <span>{data.street}</span></p>
                    <p>Miasto <span>{data.city}</span></p>
                    <p>Kod pocztowy<span>{data.postCode}</span></p>
                    <p>Numer telefonu <span>{data.phoneNumber}</span></p>


                    <h2>Termin odbioru:</h2>
                    <p>Data <span>{data.date}</span></p>
                    <p>Godzina <span>{data.time}</span></p>
                    <p>Uwagi dla kuriera <span>{data.additionalInfo}</span></p>

                    <button onClick={prev}>Wstecz</button>
                    <button type="submit">Potwierdzam</button>
                </div>
            </div>
        </>
    );
};

export default StepSummary;
