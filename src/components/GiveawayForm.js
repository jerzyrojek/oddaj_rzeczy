import React, {useState} from 'react';
import StepOne from "./GiveawayFormSteps/StepOne";
import StepTwo from "./GiveawayFormSteps/StepTwo";
import StepThree from "./GiveawayFormSteps/StepThree";
import StepFour from "./GiveawayFormSteps/StepFour";
import StepSummary from "./GiveawayFormSteps/StepSummary";
import StepFinal from "./GiveawayFormSteps/StepFinal";

const GiveawayForm = () => {
    const [formData, setFormData] = useState({
        step: 1,
        itemCategory: "",
        numberOfBags: 0,
        location: "",
        street: "",
        city: "",
        postCode: "",
        phoneNumber: "",
        date: "",
        time: "",
        additionalInfo: "",
    });

    const handleOnChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test123lol");
    }

    const nextStep = () => {
        setFormData(prev => ({...prev, step: prev.step + 1}))
    }

    const prevStep = () => {
        setFormData(prev => ({...prev, step: prev.step - 1}))
    }

    const pageToDisplay = () => {
        switch (formData.step) {
            case 1:
                return <StepOne next={nextStep} handleChange={handleOnChangeInput} data={formData}/>
            case 2:
                return <StepTwo prev={prevStep} next={nextStep} handleChange={handleOnChangeInput}/>
            case 3:
                return <StepThree prev={prevStep} next={nextStep} handleChange={handleOnChangeInput}/>
            case 4:
                return <StepFour prev={prevStep} next={nextStep} handleChange={handleOnChangeInput}/>
            case 5:
                return <StepSummary prev={prevStep}/>
            case 6:
                return <StepFinal/>
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <div className="giveawayForm">
                {pageToDisplay()}
            </div>
            </form>
        </section>
    );
};

export default GiveawayForm;
