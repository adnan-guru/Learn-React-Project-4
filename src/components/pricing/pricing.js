import React from 'react';
import  './pricing.css';
function Pricing(){
     return(
    <div>


<div class="container">
    <div class="row simple">
      <div class="col-md-3"></div>
      <div class="col-md-7">
        <h4 class="main-title mb-4">Simple and Transparent Pricing</h4>
        <p class="text-muted simple2">Eligible Students and Veterans Qualify for 20% discount at SignUp.</p>
      </div>
      <div class="col-md-2"></div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
          <div class="justify-content-center mb-5" style={{marginTop: '82px', marginBottom: '82px'}}>
            <h5 class="mb-4">Our 30-day guarantee</h5>
            <h6 class="mb-4">if you decide to close your account within 30 days of signing up, we`ll refund 100% of your
              payment</h6><a class="text-muted" href="/page-terms">
              <h6 class="mb-4"> View Terms &amp; Conditions</h6>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">

        <div class="pricing-rates1 starter-plan shadow bg-white pt-5 pb-5 p-4 rounded text-center">
          <div class="d-flex justify-content-center mb-4"><span class="h4 mb-0 mt-2">$</span><span
              class="price display-4 mb-0">10</span><span class="h4 align-self-end mb-1">/month</span></div>
          <ul class="feature list-unstyled pl-0">
            <li class="feature-list"><i class="mdi mdi-check text-success h5 mr-1"></i>Full feature Access</li>
            <li class="feature-list"><i class="mdi mdi-check text-success h5 mr-1"></i>No Contracts</li>
            <li class="feature-list"><i class="mdi mdi-check text-success h5 mr-1"></i>Cancel at any time</li>
            <li class="feature-list"><i class="mdi mdi-check text-success h5 mr-1"></i>24/7 Email Support</li>
          </ul><a class="btn btn-primary mt-4" href="/">Get Started</a>
          <div class="mt-5"><a class="text-primary" href="/page-full-features">See Full feature List<i
                class="mdi mdi-chevron-right"></i></a></div>
        </div>

      </div>

      <div class="col-md-4">

        <div class="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
          <div class="justify-content-center " style={{marginTop: '100px', marginBottom: '82px'}}>
            <h5 class="mb-4">Student and veteran Discount</h5>
            <h6 class="mb-4">We offer eligible Students and Veterans discount of 20% at SignUp</h6>
          </div>
        </div>

      </div>
    </div>


    </div>
    </div>
     )
}
export default Pricing;