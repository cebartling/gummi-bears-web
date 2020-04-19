import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';

function App() {
    return (
        <>
            <NavBar/>
            <main role="main" className="container-fluid top-margin">
                <AppRouter/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
