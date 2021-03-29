import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import MoviePage from './components/pages/MoviePage'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import './App.css'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/serie/:id" component={MoviePage} />
          <Route exact path="/sign-in" component={Login} />
          <Route component={Home} />
        </Switch>
        <Footer />
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
