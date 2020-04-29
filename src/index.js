import React from 'react';
import ReactDOM from 'react-dom';
// noinspection ES6UnusedImports
import $ from 'jquery'; // eslint-disable-line no-unused-vars
// noinspection ES6UnusedImports
import Popper from 'popper.js'; // eslint-disable-line no-unused-vars
import './scss/custom.scss';
import './scss/animations.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import ProviderWrapper from "./ProviderWrapper";
import { TrackJS } from 'trackjs';

TrackJS.install({
    token: process.env.REACT_APP_TRACKJS_API_TOKEN,
    application: process.env.REACT_APP_TRACKJS_APPLICATION
});

const app = (
    <ProviderWrapper store={store}>
        <App/>
    </ProviderWrapper>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
