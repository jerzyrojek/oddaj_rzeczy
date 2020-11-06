import React from 'react';

const StepThree = ({prev, next, handleChange, handleCheckbox, data}) => {
    return (
        <>
            <div className="giveawayForm__notice">
                <div className="container">
                    <h1>Ważne!</h1>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                        filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>

                </div>
            </div>
            <div className="giveawayForm__inputs">
                <div className="stepThree container">
                    <p>Krok 3/4</p>
                    <select name="location" onChange={handleChange} value={data.location}>
                        <option disabled value={""}>wybierz</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>

                    <h2>Komu chcesz pomóc?</h2>
                    <input onChange={handleCheckbox} name="helpGroups" value="dzieciom" id="children" type="checkbox"/>
                    <label htmlFor="children">dzieciom</label>

                    <input onChange={handleCheckbox} name="helpGroups" id="singleMothers" value="samotnym matkom" type="checkbox"/>
                    <label htmlFor="singleMothers">samotnym matkom</label>

                    <input onChange={handleCheckbox} name="helpGroups" id="homeless" value="bezdomnym" type="checkbox"/>
                    <label htmlFor="homeless">bezdomnym</label>

                    <input onChange={handleCheckbox} name="helpGroups" id="disabled" value="niepełnosprawnym" type="checkbox"/>
                    <label htmlFor="disabled">niepełnosprawnym</label>

                    <input onChange={handleCheckbox} name="helpGroups" id="elderly" value="osobom starszym" type="checkbox"/>
                    <label htmlFor="elderly">osobom starszym</label>


                    <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                    <input onChange={handleChange} name="locationSpecific" type="text"/>
                    <button onClick={prev}>Wstecz</button>
                    <button onClick={next}>Dalej</button>
                </div>
            </div>

        </>
    );
};

export default StepThree;
