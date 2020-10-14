import React from 'react';
import  './navbar.css';
import image1 from '../../images/img1.png';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
function Navbar(){
     return(
    
  <AppBar position="fixed" className="mynavbar" >
<div className="container">
    <div className="row">
      <div className="col-md-2">
        <a href="https://resumas.com/"><img className="responsive" src={image1} alt="" /></a>
      </div>
      <div className="col-md-6">

        <nav className="navbar navbar-expand-sm navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="home"
                  style= {{color:"#3c4858", padding: "30px",fontSize:"12px", lineHeight: "1px"}}><b>HOME</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="feature"
                  style={{color:"#3c4858", padding: "30px",fontSize:"12px", lineHeight: "1px"}}><b>FEATURES</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing"
                  style={{color:"#3c4858", padding: "30px",fontSize:"12px", lineHeight: "1px"}}><b>PRICING</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="patner"
                  style={{color:"#3c4858", padding: "30px",fontSize:"12px", lineHeight: "1px"}}><b>PATNERS</b></Link>

              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-1">
        <a className="btn btn-primary button style= {margin-top:30px" href="https://resumas.com/login" style={{marginTop:"20px"}}>Login </a>
      </div>

      <div className="col-md-2">
        <a className="btn btn-primary" href="https://resumas.com/signup" style={{marginTop:"20px"}}>Sign Up </a>
      </div>
    </div>
  </div>
  </AppBar>

    )
}
export default Navbar;