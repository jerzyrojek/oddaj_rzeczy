import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as ROUTES from "./routes.js";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import {withFirebase} from "./components/Firebase/FirebaseContext";
import AuthUserContext from "./components/AuthUserContext";
import LogoutPage from "./components/LogoutPage";

function App({firebase}) {

    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listener = firebase.onAuthUserListener(authUser => {
                setAuthUser(authUser);
        }, () => {
            setAuthUser(null);
        });

        return () => {
            listener();
        }

    }, []);

    return (
        <AuthUserContext.Provider value = {authUser}>
            <div className="app">
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route path={ROUTES.GIVEAWAY}/>
                        <Route path={ROUTES.LOGIN} component={LoginPage}/>
                        <Route path={ROUTES.REGISTER} component={RegistrationPage}/>
                        <Route path={ROUTES.LOGOUT} component={LogoutPage}/>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route exact path={ROUTES.NOT_FOUND} component={NotFoundPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </AuthUserContext.Provider>
    );
}

export default withFirebase(App);
