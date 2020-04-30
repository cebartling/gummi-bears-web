import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import AppRouter from './AppRouter';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Breadcrumbs from "./components/common/Breadcrumbs";

function App() {
    return (
        <>
            <NavBar/>
            <main role="main" className="container-fluid top-margin">
                <Breadcrumbs/>
                <AppRouter/>
            </main>
            <ToastContainer autoClose={6000}/>
            <Footer/>
        </>
    );
}

export default App;
