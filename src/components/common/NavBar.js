import React from "react";
import {Link} from "react-router-dom";
// import ProfilePicture from "./ProfilePicture";
import {useDispatch, useSelector} from "react-redux";
import {createActionSignIn, createActionSignOut} from "../../redux/actions";
import {isAuthenticatedSelector} from "../../redux/selectors";

const NavBar = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const dispatch = useDispatch();

    const doSignOut = () => {
        dispatch(createActionSignOut());
    };

    const doSignIn = () => {
        dispatch(createActionSignIn());
    };

    const renderAuthenticateMenuItems = () => {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/stocks" className="nav-link">Stocks</Link>
                </li>
                <li className="nav-item">
                    <Link to="/metrics" className="nav-link">Metrics</Link>
                </li>
            </React.Fragment>
        );
    };

    const renderUnauthenticatedMenuItems = () => {
        return (
            <li className="nav-item">
                <Link to={{hash: ''}}
                      className="nav-link"
                      onClick={doSignIn}>Sign in</Link>
            </li>
        );
    };

    const renderProfileMenuItems = () => {
        return (
            <li className="nav-item">
                <Link to={{hash: ''}} className="nav-link" onClick={doSignOut}>Sign out</Link>
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
                        {isAuthenticated && renderAuthenticateMenuItems()}
                        {!isAuthenticated && renderUnauthenticatedMenuItems()}
                    </ul>
                    <ul className="navbar-nav">
                        {isAuthenticated && renderProfileMenuItems()}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
