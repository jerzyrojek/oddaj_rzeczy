import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as ROUTES from "./routes.js";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path={ROUTES.GIVEAWAY}/>
                    <Route path={ROUTES.LOGIN} component={LoginPage}/>
                    <Route path={ROUTES.REGISTER}/>
                    <Route path={ROUTES.LOGOUT}/>
                    <Route exact path={ROUTES.HOME} component={Home}/>
                    <Route exact path={ROUTES.NOT_FOUND} component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
