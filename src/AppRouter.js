import React from 'react';
import {Switch} from 'react-router-dom';
import {useLocation} from 'react-router';
import DashboardPage from './views/dashboards/DashboardPage';
import StocksListingPage from './views/stocks/list/StocksListingPage';
import WelcomePage from './pages/WelcomePage';
import {GuardedRoute, GuardProvider} from 'react-router-guards';
import {useSelector} from 'react-redux';
import {isAuthenticatedSelector} from './redux/selectors';
import LoadingPage from './pages/LoadingPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './views/profile/ProfilePage';
import NewStockPage from './views/stocks/new/NewStockPage';
import MetricsListingPage from './views/metrics/list/MetricsListingPage';
import MetricDetailPage from './views/metrics/detail/MetricDetailPage';
import StockDetailPage from './views/stocks/detail/StockDetailPage';
import TransactionsPage from "./views/transactions/list/TransactionsPage";
import NewUserStockTransactionPage from "./views/transactions/new/NewUserStockTransactionPage";
import NewOrderPage from "./views/orders/new/NewOrderPage";

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
        <GuardProvider loading={LoadingPage} error={NotFoundPage}>
            <Switch key={location.key} location={location}>
                <GuardedRoute path="/" exact component={WelcomePage}/>
                <GuardProvider guards={[requiresSignIn]}>
                    <GuardedRoute path="/dashboard"
                                  exact
                                  component={DashboardPage}/>
                    <GuardedRoute path="/stocks"
                                  exact
                                  component={StocksListingPage}/>
                    <GuardedRoute path="/stock/new"
                                  exact
                                  component={NewStockPage}/>
                    <GuardedRoute path="/userStock/:userStockId"
                                  exact
                                  component={StockDetailPage}/>
                    <GuardedRoute path="/metrics"
                                  exact
                                  component={MetricsListingPage}/>
                    <GuardedRoute path="/metric/new"
                                  exact
                                  component={MetricDetailPage}/>
                    <GuardedRoute path="/metric/:id"
                                  exact
                                  component={MetricDetailPage}/>
                    <GuardedRoute path="/transactions"
                                  exact
                                  component={TransactionsPage}/>
                    <GuardedRoute path="/transaction/new"
                                  exact
                                  component={NewUserStockTransactionPage}/>
                    <GuardedRoute path="/order/new"
                                  exact
                                  component={NewOrderPage}/>
                    <GuardedRoute path="/profile"
                                  exact
                                  component={ProfilePage}/>
                </GuardProvider>
                <GuardedRoute path="*"
                              component={NotFoundPage}/>
            </Switch>
        </GuardProvider>
    );
};

export default AppRouter;
