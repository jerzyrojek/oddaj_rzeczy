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
                    <div className="itemSummary">
                        <img src={shirtIcon} alt="shirt"/>
                        <p>{data.numberOfBags} worki, {data.itemCategory}, {[...data.helpGroups].join(", ")}</p>
                    </div>
                    <div className="itemSummary">
                        <img src={refreshIcon} alt=""/>
                        <p>dla lokalizacji: {data.location}</p>
                    </div>
                    <div className="giveawaySummary">
                        <div>
                            <h2>Adres odbioru:</h2>
                            <div className="giveawaySummary__item">
                                <p>Ulica </p>
                                <span>{data.street}</span>
                            </div>

                            <div className="giveawaySummary__item">
                                <p>Miasto</p>
                                <span>{data.city}</span>
                            </div>
                            <div className="giveawaySummary__item">
                                <p>Kod pocztowy</p>
                                <span>{data.postCode}</span>
                            </div>
                            <div className="giveawaySummary__item">
                                <p>Numer telefonu</p>
                                <span>{data.phoneNumber}</span>
                            </div>

                        </div>

                        <div>
                            <h2>Termin odbioru:</h2>
                            <div className="giveawaySummary__item">
                                <p>Data</p>
                                <span>{data.date}</span>
                            </div>
                            <div className="giveawaySummary__item">
                                <p>Godzina</p>
                                <span>{data.time}</span>
                            </div>
                            <div className="giveawaySummary__item">
                                <p>Uwagi dla kuriera </p>
                                <span>{data.additionalInfo}</span>
                            </div>

                        </div>

                    </div>

                    <div>
                        <button className="prev" onClick={prev}>Wstecz</button>
                        <button className="formSubmit" type="submit">Potwierdzam</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepSummary;
