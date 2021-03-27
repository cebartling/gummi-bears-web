import React from 'react';
import {useAuth} from 'reactfire';
import {Switch} from 'react-router-dom';
import {Route, useLocation} from 'react-router';
import {GuardedRoute, GuardProvider} from 'react-router-guards';

import DashboardPage from './views/dashboards/DashboardPage';
import StocksListingPage from './views/stocks/list/StocksListingPage';
import WelcomePage from './pages/WelcomePage';
import LoadingPage from './pages/LoadingPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './views/profile/ProfilePage';
import NewStockPage from './views/stocks/new/NewStockPage';
import MetricsListingPage from './views/metrics/list/MetricsListingPage';
import MetricDetailPage from './views/metrics/detail/MetricDetailPage';
import StockDetailPage from './views/stocks/detail/StockDetailPage';
import TransactionsPage from './views/transactions/list/TransactionsPage';
import NewUserStockTransactionPage from './views/transactions/new/NewUserStockTransactionPage';
import NewOrderPage from './views/orders/new/NewOrderPage';
import OrdersPage from './views/orders/list/OrdersPage';
import SignInView from './views/signin/SignInView';

const AppRouter = () => {
  const auth = useAuth();
  const location = useLocation();

  const requiresSignIn = (to, from, next) => {
    if (auth.currentUser) {
      next();
    }
    next.redirect('/signIn');
  };

  return (
    <Switch key={location.key} location={location}>
      <Route exact path="/signIn" component={SignInView}/>
      <GuardProvider guards={[requiresSignIn]} loading={LoadingPage} error={NotFoundPage}>
        <GuardedRoute path="/"
                      exact
                      component={WelcomePage}/>
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
        <GuardedRoute path="/orders"
                      exact
                      component={OrdersPage}/>
        <GuardedRoute path="/order/new"
                      exact
                      component={NewOrderPage}/>
        <GuardedRoute path="/profile"
                      exact
                      component={ProfilePage}/>
      </GuardProvider>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  );
};

export default AppRouter;
