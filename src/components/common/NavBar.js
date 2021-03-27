import React, {lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import 'firebase/firestore';
import {AuthCheck, useFirestore, useFirestoreDocData} from 'reactfire';
import {createActionSignOut} from '../../redux/actions';
import Spinner from "./Spinner";

const ProfilePicture = lazy(() => import('./ProfilePicture'));


const NavBar = () => {
  const dispatch = useDispatch();
  const foobarRef = useFirestore().collection('profiles').doc('Foobar');
  // subscribe to a document for realtime updates. just one line!
  const {status, data} = useFirestoreDocData(foobarRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching data...</p>;
  }

  console.log(`Firestore data`, data);

  const doSignOut = () => {
    dispatch(createActionSignOut());
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
            <AuthCheck>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link dashboard-nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/stocks" className="nav-link stocks-nav-link">Stocks</Link>
              </li>
              {/*<li className="nav-item">*/}
              {/*    <Link to="/metrics" className="nav-link">Metrics</Link>*/}
              {/*</li>*/}
              <li className="nav-item">
                <Link to="/transactions" className="nav-link transactions-nav-link">Transactions</Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link orders-nav-link">Orders</Link>
              </li>
              <li className="nav-item">
                <Link to={{hash: ''}} className="nav-link" onClick={doSignOut}>Sign out</Link>
              </li>
            </AuthCheck>
          </ul>
          <ul className="navbar-nav">
            <AuthCheck>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <Suspense fallback={<Spinner />}>
                    <ProfilePicture/>
                  </Suspense>
                </Link>
              </li>
            </AuthCheck>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
