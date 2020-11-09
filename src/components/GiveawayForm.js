import React, {useContext, useState} from 'react';
import StepOne from "./GiveawayFormSteps/StepOne";
import StepTwo from "./GiveawayFormSteps/StepTwo";
import StepThree from "./GiveawayFormSteps/StepThree";
import StepFour from "./GiveawayFormSteps/StepFour";
import StepSummary from "./GiveawayFormSteps/StepSummary";
import StepFinal from "./GiveawayFormSteps/StepFinal";
import {withFirebase} from "./Firebase/FirebaseContext";
import AuthUserContext from "./AuthUserContext";

const GiveawayForm = ({firebase}) => {
    const authUser = useContext(AuthUserContext);
    const [formData, setFormData] = useState({
        itemCategory: "",
        numberOfBags: 0,
        location: "",
        helpGroups: [],
        locationSpecific: "",
        street: "",
        city: "",
        postCode: "",
        phoneNumber: "",
        date: "",
        time: "",
        additionalInfo: "",
    });

    const [formStep, setFormStep] = useState({
        currentStep: 1,
    })

    const handleOnChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            };
        })
    }
    const handleChangeCheckbox = (e) => {

        const {name, value, checked} = e.target;
        if (checked) {
            setFormData(prev => ({...prev, [name]: [...prev.helpGroups, value]}))
        } else if (!checked) {
            setFormData(prev => ({...prev, [name]: prev.helpGroups.filter((element) => element !== value)}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.database.collection("giveaways").add({...formData, email:authUser.email}).then(() => {
            setFormData({
                itemCategory: "",
                numberOfBags: 0,
                location: "",
                helpGroups: [],
                locationSpecific: "",
                street: "",
                city: "",
                postCode: "",
                phoneNumber: "",
                date: "",
                time: "",
                additionalInfo: "",
            })
        }).then(() => {
            setFormStep({currentStep:6})
        })
    }

    const nextStep = () => {
        setFormStep(prev => ({...prev, currentStep: prev.currentStep + 1}))
    }

    const prevStep = () => {
        setFormStep(prev => ({...prev, currentStep: prev.currentStep - 1}))
    }

    const pageToDisplay = () => {
        switch (formStep.currentStep) {
            case 1:
                return <StepOne next={nextStep} handleChange={handleOnChangeInput} data={formData}/>
            case 2:
                return <StepTwo prev={prevStep} next={nextStep} handleChange={handleOnChangeInput} data={formData}/>
            case 3:
                return <StepThree prev={prevStep} next={nextStep} handleChange={handleOnChangeInput}
                                  handleCheckbox={handleChangeCheckbox} data={formData}/>
            case 4:
                return <StepFour prev={prevStep} next={nextStep} handleChange={handleOnChangeInput} data={formData}/>
            case 5:
                return <StepSummary prev={prevStep} data={formData}/>
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

export default withFirebase(GiveawayForm);
