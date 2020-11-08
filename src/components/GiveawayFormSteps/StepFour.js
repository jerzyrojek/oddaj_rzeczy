import React from 'react';

const StepFour = ({prev,next, handleChange, data}) => {
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
                    <div className="pickUpAddress">
                        <h2>Adres odbioru</h2>

                        <label>Ulica</label>
                        <input onChange={handleChange} value={data.street} name="street" type="text"/>

                        <label>Miasto</label>
                        <input onChange={handleChange} value={data.city} name="city" type="text"/>

                        <label>Kod pocztowy</label>
                        <input onChange={handleChange} value={data.postCode} name="postCode" type="text"/>

                        <label>Numer telefonu</label>
                        <input onChange={handleChange} value={data.phoneNumber} name="phoneNumber" type="text"/>


                    </div>

                    <div className="pickUpDate">
                        <h2>Termin odbioru</h2>

                        <label>Data</label>
                        <input onChange={handleChange} value={data.date} name="date" type="date"/>

                        <label>Godzina</label>
                        <input onChange={handleChange} value={data.time} name="time" type="time"/>

                        <label>Uwagi dla kuriera</label>
                        <input onChange={handleChange} value={data.additionalInfo} name="additionalInfo" type="text"/>
                    </div>

                    <button className="prev" onClick={prev}>Wstecz</button>
                    <button className="next" onClick={next}>Dalej</button>
                </div>
            </div>
        </>
    );
};

export default StepFour;
