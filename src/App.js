import React from 'react';
import Navbar from './components/navbar/navbar';
import Unlock from './components/navbar/unlock/unlock';
import Feature from './components/feature/feature';
import Job from './components/job/job';
import Optimization from './components/optimization/optimization';
import Pricing from './components/pricing/pricing';
import Patner_app from './components/patner_app/patner_app';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
    <Router exact path="/home">
      <Unlock />
      <Feature />
      <Job />
      <Pricing />
      <Optimization />
      <Patner_app />
    </Router>
    <Router  path="/feature">
      <Feature />
    </Router>
    <Router path="/pricing">
      <Pricing />
    </Router>
    <Router path="/patner">
      <Patner_app />
    </Router>
    </Switch>
    </div>
   
    <Footer />
    </Router>
  );
}

export default App;
