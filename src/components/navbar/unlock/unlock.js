import React from 'react';
import  './unlock.css';
import image2 from '../../../images/img2.jpeg';

function Unlock(){
     return(
    <div>


<div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1 className="heading mb-3">Unlock the door for interviews.<br /> Optimize your resume for success! </h1>
        <p className="para-desc2 text-muted">Beat the Applicant Tracking Systems (ATS) with our AI based platform. Instantly
          create resume with right keywords for a perfect job match Period</p>
        <a className="btn btn-primary mt-2 mr-2 btn2" href="https://resumas.com/"><i className="mdi mdi-apple"></i> App
          Store</a>
        <a className="btn btn-primary mt-2 mr-2 btn2" href="https://resumas.com/"><i className="mdi mdi-google-play"></i> Play
          Store</a>
      </div>
      



      <div className="col-md-6">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <img className="responsive img2" src={image2} style={{paddingTop: "110px",}} alt="" />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  </div>


    </div>
     )
}
export default Unlock;