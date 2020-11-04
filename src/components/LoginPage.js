import React from 'react';
import {Form, Field} from "react-final-form";
import decoration from "../assets/Decoration.svg";
import * as ROUTES from "../routes.js";
import {withFirebase} from "./Firebase/FirebaseContext";
import {Link, useHistory} from "react-router-dom";


const LoginPage = ({firebase}) => {
    const history = useHistory();
    const required = value => (value ? undefined : 'Wymagane');
    const validEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(value) ? undefined : "Podany email jest nieprawidłowy!"
    }
    const validPassword = value => value.length >= 6 ? undefined : "Podane hasło jest za krótkie!";
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    const handleSignIn = ({email, password}) => {
        firebase.signInEmailAndPassword(email, password).then((res) => {
            setTimeout(() => {
                history.push(ROUTES.HOME);
            },2000)
        })
    }

    return (
        <div className="loginPage">
            <div className="loginPage__content container">
                <h1>Zaloguj się</h1>
                <img alt="decoration" src={decoration}/>
                <Form
                    onSubmit={handleSignIn}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="formInputs">
                                <Field name="email" validate={composeValidators(required, validEmail)}>
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Email</label>
                                            <input {...input}
                                                   style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                   type="text"/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : <span style={{height:"15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password" validate={composeValidators(required, validPassword)}>
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Hasło</label>
                                            <input {...input}
                                                   style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                   type="password"/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : <span style={{height:"15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="formButtons">
                                <Link to={ROUTES.REGISTER}>Załóż konto</Link>
                                <button type="submit">
                                    Zaloguj się
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    );
};

export default withFirebase(LoginPage);
