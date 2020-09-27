import React from 'react';
import  './optimization.css';
import image5 from '../../images/img5.png';
function Optimization(){
     return(
    <div>


<div className="container">
<div class="row">
      <div class="col-md-3">
        <h4 class="title2 font-weight-normal mb-0">Optimize Resume</h4>
      </div>
      <div class="col-md-3">
        <h4 class="title3 font-weight-normal mb-0">Optimize Resume</h4>
      </div>
      <div class="col-md-3">
        <h4 class="title3 font-weight-normal mb-0">Optimize Resume</h4>
      </div>
      <div class="col-md-3">
        <h4 class="title3 font-weight-normal mb-0">Optimize Resume</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img class="responsive img5" src={image5} alt="" />
      </div>
      <div class="col-md-6">
        <h4 class="title4 mb4">
          <i class="mdi mdi-chevron-double-right text-primary"></i>
          Resume Optimization
        </h4>
        <p class="text-muted muted">When you apply for a job, first review is performed by an Applicant Tracking Systems
          (ATS)
          based on how well your resume matches to the job description based on key words. Our platform ensures that
          your resume includes the keywords or phrases that the ATS will be looking for.</p>
        <div>
          <ul class="list-unstyled feature-list text-muted tickmuted">
            <li><i class="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Review and keyword optimization.</li>
            <li><i class="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>ReviewScore calculation - improve
              resume.</li>
            <li><i class="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Tailor your resume to the job
              description.</li>
            <li><i class="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>Improve Key Sections - Education,
              Experience &amp; Skills.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>



    </div>
     )
}
export default Optimization;