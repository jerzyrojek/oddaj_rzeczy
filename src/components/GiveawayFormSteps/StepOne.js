import React, {useState} from 'react';

const StepOne = ({next, data, handleChange}) => {

    const radioOptions = {
        clothesToBeUsed: "ubrania, które nadają się do ponownego użycia",
        clothesNonUsable: "ubrania, do wyrzucenia",
        toys: "zabawki",
        books: "książki",
        others: "inne",
    }

    const [errorStatus, setErrorStatus] = useState(false)

    const showError = () => {
        setErrorStatus(true);
    }

    return (
        <>
            <div className="giveawayForm__notice">
                <div className="container">
                    <h1>Ważne!</h1>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                        przekazać.</p>
                </div>
            </div>
            <div className="giveawayForm__inputs">
                <div className="stepOne container">
                    <p>Krok 1/4</p>
                    <h2>Zaznacz co chcesz oddać:</h2>
                    <div className="stepOne__radio">
                        <input onChange={handleChange} id="usableClothes"
                               checked={data.itemCategory === radioOptions.clothesToBeUsed}
                               value={radioOptions.clothesToBeUsed} name="itemCategory" type="radio"/>
                        <label htmlFor="usableClothes"><span/>{radioOptions.clothesToBeUsed}</label>
                    </div>

                    <div className="stepOne__radio">
                        <input onChange={handleChange} id="unusableClothes"
                               checked={data.itemCategory === radioOptions.clothesNonUsable}
                               value={radioOptions.clothesNonUsable} name="itemCategory"
                               type="radio"/>
                        <label htmlFor="unusableClothes"><span/>{radioOptions.clothesNonUsable}</label>
                    </div>
                    <div className="stepOne__radio">
                        <input checked={data.itemCategory === radioOptions.toys} onChange={handleChange} id="toys"
                               value={radioOptions.toys} name="itemCategory" type="radio"/>
                        <label htmlFor="toys"><span/>{radioOptions.toys}</label>
                    </div>
                    <div className="stepOne__radio">
                        <input checked={data.itemCategory === radioOptions.books} onChange={handleChange} id="books"
                               value={radioOptions.books} name="itemCategory" type="radio"/>
                        <label htmlFor="books"><span/>{radioOptions.books}</label>
                    </div>
                    <div className="stepOne__radio">
                        <input checked={data.itemCategory === radioOptions.others} onChange={handleChange} id="other"
                               value={radioOptions.others} name="itemCategory" type="radio"/>
                        <label htmlFor="other"><span/>{radioOptions.others}</label>
                    </div>

                    {errorStatus ? <span className="error">Wymagane wybranie kategorii</span> : <span className="error__hidden"/>}
                    <button className="next" type="button" onClick={data.itemCategory !== "" ? next : showError}>Dalej</button>
                </div>
            </div>

        </>
    );
};

export default StepOne;
