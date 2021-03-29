import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import React, { Fragment, useEffect, useState } from 'react'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import MoviePage from './components/pages/MoviePage'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import './App.css'


function App() {

  const [hideComponents, setHideComponents] = useState(false);
  const [pos, setPos] = useState(0);
  
  const hide = (bool) => setHideComponents(bool);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPos(window.scrollY);
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <div className="App">
        {
          !hideComponents && (
            <Fragment>
              <Header />
              <Navbar pos={pos} />
            </Fragment>
          )
        }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/serie/:id" component={MoviePage} />
          <Route exact path="/sign-in">
            <Login hide={hide} />
          </Route>
          <Route component={Home} />
        </Switch>
        {
          !hideComponents && <Footer />
        }
      </div>
    </Router>
  );
}


// Reset Scroll Position
export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
