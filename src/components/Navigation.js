import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../routes";
import * as Scroll from "react-scroll";

const Navbar = () => {
    return (
        <div className="navigation container">
            <div className="navigation__main">
                <Link to={ROUTES.LOGIN}>Zaloguj</Link>
                <Link to={ROUTES.REGISTER}>Załóż konto</Link>
            </div>
            <nav className="navigation__homepage">
                <ul>
                    <Scroll.Link to={"/"}>
                        <li>Start</li>
                    </Scroll.Link>
                    <Scroll.Link to={"/"}>
                        <li>O co chodzi?</li>
                    </Scroll.Link>
                    <Scroll.Link to="about-us" smooth={true}>
                        <li>O nas</li>
                    </Scroll.Link>
                    <Scroll.Link to={"/"}>
                        <li>Fundacja i organizacje</li>
                    </Scroll.Link>
                    <Scroll.Link to={"/"}>
                        <li>Kontakt</li>
                    </Scroll.Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;