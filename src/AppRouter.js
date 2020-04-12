import React from 'react';
import {Route, Switch} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";
import {useLocation} from "react-router";
import DashboardPage from "./pages/DashboardPage";
import StocksPage from "./pages/StocksPage";
import WelcomePage from "./pages/WelcomePage";

const AppRouter = () => {
    const location = useLocation();

    return (
        <CSSTransitionGroup
            transitionName="view"
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={false}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <Switch key={location.key} location={location}>
                <Route path="/dashboard">
                    <DashboardPage/>
                </Route>
                <Route path="/stocks">
                    <StocksPage/>
                </Route>
                <Route path="/">
                    <WelcomePage/>
                </Route>
            </Switch>
        </CSSTransitionGroup>
    );
};

export default AppRouter;
