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


function App() {
  return (
    <div className="App">
    <Navbar />
    <Unlock />
    <Feature />
    <Job />
    <Optimization />
    <Pricing />
    <Patner_app />
    <Footer />
    
    </div>
  );
}

export default App;
