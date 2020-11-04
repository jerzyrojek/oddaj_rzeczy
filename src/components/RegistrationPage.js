import React, {useState} from 'react';
import {withFirebase} from "./Firebase/FirebaseContext";
import decoration from "../assets/Decoration.svg";
import {Field, Form} from "react-final-form";
import {Link, useHistory} from "react-router-dom";
import * as ROUTES from "../routes";

const RegistrationPage = ({firebase}) => {
    const [status, setStatus] = useState({
        success: false,
        error: false
    });
    const history = useHistory();

    const handleRegister = ({email, password}) => {

        firebase.newUserEmailAndPassword(email, password).then(() => {
            setStatus(prev => ({...prev, success:true}));
            setTimeout(() => {
                history.push(ROUTES.HOME);
            }, 2000)
        }).catch(() => {
            setStatus(prev =>({...prev, error:true}));
        })
    }

    return (
        <div className="registrationPage">
            <div className="registrationPage__content container">
                <h1>Załóż konto</h1>
                <img alt="decoration" src={decoration}/>
                <div className="notification">
                    {status && status.success &&
                    <p className="success">Konto założone!<span>Nastąpi przekierowanie...</span></p>}
                    {status && status.error &&
                    <p className="error">Założenie konta nie powiodło się.<span>Spróbuj ponownie.</span></p>}
                </div>
                <Form
                    onSubmit={handleRegister}
                    validate={values => {
                        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Wymagane!"
                        } else if (!re.test(values.email)) {
                            errors.email = "Podany email jest nieprawidłowy!"
                        }
                        if (!values.password) {
                            errors.password = "Wymagane!"
                        } else if (values.password.length < 6) {
                            errors.password = "Podane hasło jest za krótkie!"
                        }
                        if (!values.confirm) {
                            errors.confirm = "Wymagane!"
                        } else if (values.password !== values.confirm) {
                            errors.confirm = "Hasła muszą być jednakowe!"
                        }
                        return (errors);
                    }}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="formInputs">
                                <Field name="email">
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Email</label>
                                            <input {...input}
                                                   style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                   type="text"/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> :
                                                <span style={{height: "15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Hasło</label>
                                            <input {...input}
                                                   style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                   type="password"/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> :
                                                <span style={{height: "15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="confirm">
                                    {({input, meta}) => (
                                        <div className="formField">
                                            <label>Powtórz hasło</label>
                                            <input {...input}
                                                   style={meta.error && meta.touched ? {borderBottom: "1px solid red"} : {}}
                                                   type="password"/>
                                            {meta.error && meta.touched ? <span>{meta.error}</span> :
                                                <span style={{height: "15px"}}/>}
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="formButtons">
                                <Link to={ROUTES.LOGIN}>Zaloguj się</Link>
                                <button type="submit">
                                    Załóż konto
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </div>
    );
};

export default withFirebase(RegistrationPage);
