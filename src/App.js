import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import NavBar from './components/common/NavBar';
import {useAuth0} from './react-auth0-spa';
import Footer from './components/common/Footer';
import history from "./history";
import {BrowserRouter} from "react-router-dom";

function App() {
  const {loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <BrowserRouter history={history}>
          <NavBar/>
          <main role="main" className="container-fluid top-margin">
              <AppRouter/>
          </main>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
