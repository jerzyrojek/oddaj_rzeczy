import React, {useState} from 'react';
import decoration from "../assets/Decoration.svg";
import facebookLogo from "../assets/Facebook.svg";
import instagramLogo from "../assets/Instagram.svg";
import {Form, Field} from "react-final-form";

const Contact = () => {
    const [responseStatus, setResponseStatus] = useState(null);
    const required = value => (value ? undefined : 'Wymagane');
    const validName = value => value.length >= 3 && !value.includes(" ") ? undefined : "Podane imię jest nieprawidłowe!";
    const validEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(value) ? undefined : "Podany email jest nieprawidłowy!"
    }
    const minLength = value =>
        value.length >= 120 ? undefined : `Wiadomość musi mieć conajmniej 120 znaków!`
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    const handleContactFormSubmit = (values) => {
        setResponseStatus(null);
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setResponseStatus(res);
        })
    }


    return (
        <section className="contact" id="contact-form">
            <div className="contact__wrapper container">
                <div className="contact__content">
                    <h1>Skontaktuj się z nami</h1>
                    <img alt="decoration" src={decoration}/>
                    <div className="notification">
                        {responseStatus && responseStatus.status === 200 &&
                        <p className="success">Wiadomość została wysłana!<span>Wkrótce się skontaktujemy.</span></p>}
                        {responseStatus && responseStatus.status === 400 &&
                        <p className="error">Wysłanie wiadomości nie powiodło się! <span>Spróbuj ponownie.</span></p>}
                    </div>
                    <Form
                        onSubmit={handleContactFormSubmit}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="formFirstRow">
                                    <Field name="name" validate={composeValidators(required, validName)}>
                                        {({input, meta}) => (
                                            <div className="formField">
                                                <label>Wpisz swoje imię</label>
                                                <input {...input}
                                                       style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                       type="text" placeholder="Krzysztof"/>
                                                {meta.error && meta.touched ? <span>{meta.error}</span> : <span style={{height:"15px"}}/>}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="email" validate={composeValidators(required, validEmail)}>
                                        {({input, meta}) => (
                                            <div className="formField">
                                                <label>Wpisz swój email</label>
                                                <input {...input}
                                                       style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                       type="text" placeholder="abc@xyz.pl"/>
                                                {meta.error && meta.touched ? <span>{meta.error}</span> : <span style={{height:"15px"}}/>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <Field
                                    name="message"
                                    validate={composeValidators(required, minLength)}
                                >
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Wpisz swoją wiadomość</label>
                                            <textarea {...input}
                                                      style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : <span style={{height:"15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                                <button type="submit">
                                    Wyślij
                                </button>
                            </form>
                        )}
                    />
                </div>
                <div className="footer">
                    <p className="footer__copyright">Copyright by Coders Lab</p>
                    <div className="footer__icons">
                        <img alt="facebookLogo" src={facebookLogo}/>
                        <img alt="instagramLogo" src={instagramLogo}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
