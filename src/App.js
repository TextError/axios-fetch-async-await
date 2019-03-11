import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import Axios from './components/axios/Axios';
import Fetch from './components/fetch/Fetch';
import AsyncAwait from './components/async-await/AsyncAwait';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className='container-fluid'>
            <Navbar />
            <Route exact path='/home' component={Home} />
            <Route exact path='/axios' component={Axios} />
            <Route exact path='/fetch' component={Fetch} />
            <Route exact path='/async-await' component={AsyncAwait} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;