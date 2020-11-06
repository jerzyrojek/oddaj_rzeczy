import React, {useState} from 'react';

const StepTwo = ({prev, next, handleChange, data}) => {

    const [errorStatus, setErrorStatus] = useState(false)

    const showError = () => {
        setErrorStatus(true);
    }
    return (
        <>
            <div className="giveawayForm__notice">
                <div className="container">
                    <h1>Ważne!</h1>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować
                        rzeczy znajdziesz TUTAJ {/*Link was not provided in the project*/}</p>

                </div>
            </div>
            <div className="giveawayForm__inputs">
                <div className="stepTwo container">
                    <p>Krok 2/4</p>
                    <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h1>
                    <label htmlFor="bagsQuantity">Liczba 60l worków:</label>
                        <select id="bagsQuantity" required name="numberOfBags" onChange={handleChange} value={data.numberOfBags}>
                            <option disabled value={0}>wybierz</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    <button onClick={prev}>Wstecz</button>
                    <button type="button" onClick={data.numberOfBags !== 0 ? next : showError}>Dalej</button>
                    {errorStatus && <span>Wymagane wybranie ilości worków</span>}
                </div>
            </div>

        </>
    );
};

export default StepTwo;
