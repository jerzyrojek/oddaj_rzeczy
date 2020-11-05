import React from 'react';

const StepOne = ({next, data, handleChange}) => {

    const radioOptions = {
        clothesToBeUsed: "ubrania, które nadają się do ponownego użycia",
        clothesNonUsable: "ubrania, do wyrzucenia",
        toys: "zabawki",
        books: "książki",
        others: "inne",
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
                    <h1>Zaznacz co chcesz oddać:</h1>
                    <div className="item">
                        <input onChange={handleChange} id="usableClothes"
                               checked={data.itemCategory === radioOptions.clothesToBeUsed}
                               value={radioOptions.clothesToBeUsed} name="itemCategory" type="radio"/>
                        <label htmlFor="usableClothes">{radioOptions.clothesToBeUsed}</label>
                    </div>

                    <div className="item">
                        <input onChange={handleChange} id="unusableClothes"
                               checked={data.itemCategory === radioOptions.clothesNonUsable}
                               value={radioOptions.clothesNonUsable} name="itemCategory"
                               type="radio"/>
                        <label htmlFor="unusableClothes">{radioOptions.clothesNonUsable}</label>
                    </div>
                    <div className="item">
                        <input checked={data.itemCategory === radioOptions.toys} onChange={handleChange} id="toys"
                               value={radioOptions.toys} name="itemCategory" type="radio"/>
                        <label htmlFor="toys">{radioOptions.toys}</label>
                    </div>
                    <div className="item">
                        <input checked={data.itemCategory === radioOptions.books} onChange={handleChange} id="books"
                               value={radioOptions.books} name="itemCategory" type="radio"/>
                        <label htmlFor="books">{radioOptions.books}</label>
                    </div>
                    <div className="item">
                        <input checked={data.itemCategory === radioOptions.others} onChange={handleChange} id="other"
                               value={radioOptions.others} name="itemCategory" type="radio"/>
                        <label htmlFor="other">{radioOptions.others}</label>
                    </div>


                    <button onClick={next}>Dalej</button>
                </div>
            </div>

        </>
    );
};

export default StepOne;
