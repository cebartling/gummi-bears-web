import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar/>
            <main role="main" className="container-fluid top-margin">
                <AppRouter/>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
