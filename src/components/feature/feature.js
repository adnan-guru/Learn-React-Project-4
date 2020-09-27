import React from 'react';
import  './feature.css';
import image4 from '../../images/img4.png';

function Feature(){
     return(
    <div>

<div class="container maindiv">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h4 class="main-title mb-4">App Features</h4>
      </div>
      <div class="col-md-4"></div>
    </div>

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <p class="text-muted para-desc mb-0 mx-auto">Your chances of an interview depends on your resume making it
          through Applicant Tracking Systems (ATS). Our platform makes it easier to get through the process.</p>
      </div>
      <div class="col-md-2"></div>
    </div>
    
    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-10">
            <h4 class="title">Optimize Resume</h4>
            <p class="text-muted para mb-0">Companies use Applicant Tracking Systems to select qualified applicants
              based on keyword matching. Review resume and optimize it!.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-10">

            <span class="glyphicon glyphicon-envelope"></span>
            <h4 class="title">Job Matcher</h4>
            <p class="text-muted para mb-0">Search local area jobs based on your criteria and your qualifications and
              profile. Integrated with ziprecruiter.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-10">
            <h4 class="title">Mobile App - Android & IOS</h4>
            <p class="text-muted para mb-0">Full featured mobile app where everything can be done via mobile app. Always
              access using web application tool.

            </p>
          </div>
        </div>

      </div>
      <div class="col-md-4">

        <div class="row">
          <div class="col-md-2">


          </div>
          <div class="col-md-10">
            <h4 class="title">Track Resumes and Jobs</h4>
            <p class="text-muted para mb-0">Job search dashboard listing all your resume versions and jobs applied and
              current status.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <i class="mdi mdi-check-decagram icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

          </div>
          <div class="col-md-10">
            <h4 class="title">Finish & Print</h4>
            <p class="text-muted para mb-0">Use our professional designed templates optimized for applicant tracking
              systems (ATS). Print and pickup at local FedexOffice.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <i class="mdi mdi-cards-heart icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

          </div>
          <div class="col-md-10">
            <h4 class="title"> Pay with Venmo</h4>
            <p class="text-muted para mb-0">Different payment options including Venmo. paypal, and Visca/MC/Amex. Free
              7-day trail. No commitments, cancel any time.</p>
          </div>
        </div>

      </div>
      <div class="col-md-4">
        <img class="responsive img4" src={image4} alt="" />
      </div>
    </div>

    </div>
    </div>
     )
}
export default Feature;