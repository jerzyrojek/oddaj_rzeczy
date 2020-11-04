import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import * as ROUTES from "../routes";
import * as Scroll from "react-scroll";
import AuthUserContext from "./AuthUserContext";
import {withFirebase} from "./Firebase/FirebaseContext";

const Navbar = ({firebase}) => {
    const authUser = useContext(AuthUserContext);
    const history = useHistory();

    const handleSignOut = () => {
        firebase.signOut().then(() => {
            history.push(ROUTES.LOGOUT);
        });
    }
    return (
        <>
            <div className="navigation container">
                <div className="navigation__main">
                    {authUser ?
                        <div className="navigation__main__auth">
                            <p>Cześć {authUser.email}!</p>
                            <Link to={ROUTES.GIVEAWAY}>Oddaj rzeczy</Link>
                            <button onClick={handleSignOut}>Wyloguj</button>
                        </div>
                        :
                        <>
                            <Link to={ROUTES.LOGIN}>Zaloguj</Link>
                            <Link to={ROUTES.REGISTER}>Załóż konto</Link>
                        </>
                    }
                </div>

                <nav className="navigation__homepage">
                    <ul>
                        <Link to={"/"}>
                            <li>Start</li>
                        </Link>
                        <Scroll.Link to="simple-steps" smooth={true}>
                            <li>O co chodzi?</li>
                        </Scroll.Link>
                        <Scroll.Link to="about-us" smooth={true}>
                            <li>O nas</li>
                        </Scroll.Link>
                        <Scroll.Link to={"who-we-help"} smooth={true}>
                            <li>Fundacja i organizacje</li>
                        </Scroll.Link>
                        <Scroll.Link to={"contact-form"} smooth={true}>
                            <li>Kontakt</li>
                        </Scroll.Link>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default withFirebase(Navbar);
