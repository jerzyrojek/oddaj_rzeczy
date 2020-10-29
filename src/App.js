import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as ROUTES from "./routes.js";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <BrowserRouter>
                <Switch>
                    <Route path={ROUTES.GIVEAWAY}/>
                    <Route path={ROUTES.LOGIN}/>
                    <Route path={ROUTES.REGISTER}/>
                    <Route path={ROUTES.LOGOUT}/>
                    <Route exact path={ROUTES.HOME} component={Home}/>
                    <Route exact path={ROUTES.NOT_FOUND} component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
