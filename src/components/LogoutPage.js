import React from 'react';
import * as ROUTES from "../routes";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const LogoutPage = () => {
    return (
        <div className="logoutPage">
            <h1>Wylogowanie nastąpiło <span>pomyślnie!</span></h1>
            <img alt="decoration" src={decoration}/>
            <Link to={ROUTES.HOME}>Strona główna</Link>
        </div>
    );
};

export default LogoutPage;
