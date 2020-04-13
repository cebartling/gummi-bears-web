import React from 'react';
import {Switch} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";
import {useLocation} from "react-router";
import DashboardPage from "./pages/DashboardPage";
import StocksPage from "./pages/StocksPage";
import WelcomePage from "./pages/WelcomePage";
import {GuardedRoute, GuardProvider} from 'react-router-guards';
import {useSelector} from "react-redux";
import {isAuthenticatedSelector} from "./redux/selectors";
import LoadingPage from "./pages/LoadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

const AppRouter = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const location = useLocation();

    const requiresSignIn = (to, from, next) => {
        if (isAuthenticated) {
            next();
        }
        next.redirect('/');
    };

    return (
        <CSSTransitionGroup
            transitionName="view"
            transitionAppear={false}
            transitionEnter={true}
            transitionLeave={false}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <GuardProvider loading={LoadingPage} error={NotFoundPage}>
                <Switch key={location.key} location={location}>
                    <GuardedRoute path="/" exact component={WelcomePage}/>
                    <GuardProvider guards={[requiresSignIn]}>
                        <GuardedRoute path="/dashboard"
                                      exact
                                      component={DashboardPage}/>
                        <GuardedRoute path="/stocks"
                                      exact
                                      component={StocksPage}/>
                        <GuardedRoute path="/profile"
                                      exact
                                      component={ProfilePage}/>
                    </GuardProvider>
                    <GuardedRoute path="*"
                                  component={NotFoundPage}/>
                </Switch>
            </GuardProvider>
        </CSSTransitionGroup>
    );
};

export default AppRouter;
