import React from 'react';
import  './footer.css';
import image6 from '../../images/img1.png';
function Footer(){
     return(
    <div>



<div class="container-fluid">
    <div class="row footer">
      <div class="col-md-4">
        <img class="responsive respon" src={image6} alt="" />
        <p class="mt-4">Resumas is mobile based full featured resume optimization app to help job seeker to get more
          interviews. Upload or build resume to optimize for a specific job description, you getting more interviews is
          our Success!</p>
        <a class="rounded mr-1 iconcolor" href="/"><i class="mdi mdi-facebook" title="Facebook"></i></a>
        <a class="rounded mr-1" href="/"><i class="mdi mdi-instagram" title="Instagram"></i></a>
        <a class="rounded" href="/"><i class="mdi mdi-twitter" title="Twitter"></i></a>
      </div>
      <div class="col-md-2 text-footer">
        <a class="text-foot decoration" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> SignUp</a><br />
        <a class="text-foot" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> Pricing</a><br />
        <a class="text-foot" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> Features</a><br />
        <a class="text-foot" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> FAQ</a><br />
        <a class="text-foot" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> Partners</a><br />
        <a class="text-foot" href="/signup"><i class="mdi mdi-chevron-right mr-1"></i> Login</a>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-5 input1">
            <label>Your Name <span class="text-danger">*</span></label>
            <i class="mdi icons"><input name="name" id="name" type="text" class="form-control pl-5"
                placeholder="First Name :" required="" /></i>
          </div>
          <div class="col-md-5 input1">
            <label onclick="adnan"> Your Email <span class="text-danger">*</span></label>
            <input name="email" id="email" type="email" class="form-control pl-5" placeholder="Your email :"
              required="" />
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <label class="comment">Comments</label>
            <textarea name="comments" id="comments" rows="4" class="form-control pl-5"
              placeholder="Your Message :"></textarea>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-10">
            <input type="submit" id="submit" name="send" class="submitBnt btnlast btn-primary btn-block"
              value="Send Message" />
          </div>

          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <div class="row footercolor">
      <div class="col-md-12">
        <hr />
      </div>
    </div>
    <div class="row footercolor">
      <div class="col-md-6">
        <p class="mb-0 lasttext footercolor">© 2020 WorkScaler, inc. Resumas is a service of Workscaler, Inc.</p>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-4">
        <a class="text-foot" href="/page-privacy">Privacy Policy| </a>
        <a class="text-foot" href="/page-terms-of-services">Terms of Services|</a>
        <a class="text-foot" href="/page-legal">Legal</a>

      </div>
    </div>
  </div>
  </div>
  
  
    
     )
}
export default Footer;