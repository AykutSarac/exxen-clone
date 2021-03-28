import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/pages/Home'
import MoviePage from './components/pages/MoviePage'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ScrollTop from './components/layout/ScrollTop'
import Navbar from './components/layout/Navbar'
import './App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Navbar />
        <ScrollTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/serie/:id" component={MoviePage} />
            <Route component={Home} />
          </Switch>
        </ScrollTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
