import React from 'react';

const StepFour = ({prev, next, handleChange, data}) => {
    return (
        <>
            <div className="giveawayForm__notice">
                <div className="container">
                    <h1>Ważne!</h1>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>

                </div>
            </div>
            <div className="giveawayForm__inputs">
                <div className="stepFour container">
                    <p>Krok 4/4</p>
                    <h1>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
                    <div className="stepFour__giveawayDetails">
                        <div className="pickUpAddress">
                            <h2>Adres odbioru:</h2>

                            <div className="inputField">
                                <label>Ulica</label>
                                <input onChange={handleChange} value={data.street} name="street" type="text"/>
                            </div>

                            <div className="inputField">
                                <label>Miasto</label>
                                <input onChange={handleChange} value={data.city} name="city" type="text"/>
                            </div>

                            <div className="inputField">
                                <label>Kod pocztowy</label>
                                <input onChange={handleChange} value={data.postCode} name="postCode" type="text"/>
                            </div>

                            <div className="inputField">
                                <label>Numer telefonu</label>
                                <input onChange={handleChange} value={data.phoneNumber} name="phoneNumber" type="text"/>
                            </div>

                        </div>

                        <div className="pickUpDate">
                            <h2>Termin odbioru:</h2>
                            <div className="inputField">
                                <label>Data</label>
                                <input onChange={handleChange} value={data.date} name="date" type="date"/>
                            </div>

                            <div className="inputField">
                                <label>Godzina</label>
                                <input onChange={handleChange} value={data.time} name="time" type="time"/>
                            </div>

                            <div className="inputField">
                                <label>Uwagi dla kuriera</label>
                                <input onChange={handleChange} value={data.additionalInfo} name="additionalInfo"
                                       type="text"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="prev" onClick={prev}>Wstecz</button>
                        <button className="next" onClick={next}>Dalej</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepFour;
