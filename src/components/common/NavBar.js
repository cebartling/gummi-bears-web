import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createActionSignIn, createActionSignOut} from "../../redux/actions";
import {isAuthenticatedSelector} from "../../redux/selectors";
import ProfilePicture from "./ProfilePicture";

const NavBar = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const dispatch = useDispatch();

    const doSignOut = () => {
        dispatch(createActionSignOut());
    };

    const doSignIn = () => {
        dispatch(createActionSignIn());
    };

    const renderAuthenticateNavItems = () => {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/stocks" className="nav-link">Stocks</Link>
                </li>
                <li className="nav-item">
                    <Link to={{hash: ''}} className="nav-link" onClick={doSignOut}>Sign out</Link>
                </li>
            </React.Fragment>
        );
    };

    const renderSignInNavItem = () => {
        return (
            <li className="nav-item">
                <Link to={{hash: ''}}
                      className="nav-link"
                      onClick={doSignIn}>Sign in</Link>
            </li>
        );
    };

    const renderProfilePictureNavItem = () => {
        return (
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    <ProfilePicture/>
                </Link>
            </li>
        );
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" className="navbar-brand">Gummi Bears</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        {isAuthenticated && renderAuthenticateNavItems()}
                    </ul>
                    <ul className="navbar-nav">
                        {!isAuthenticated && renderSignInNavItem()}
                        {isAuthenticated && renderProfilePictureNavItem()}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
