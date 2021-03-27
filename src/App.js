import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import Home from './components/pages/Home'
import MoviePage from './components/pages/MoviePage'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import { featured } from './data/movieData'
import './App.css'

// Reset scroll position
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route exact path="/serie/:id" component={MoviePage} movie={featured} />
        </ScrollToTop>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
