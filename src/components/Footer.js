import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' ;
import "../css/Footer.css";




// /* <MDBFooter color="" className="font-small pt-4 mt-4">*/
const Footer = () => {
  return (
      <div className="footer">
  
   <MDBFooter>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Site web perso</h5>
            <p className="title">
            LE CODAGE SIMPLIFIÉ
            </p>
          
          </MDBCol>
          <MDBCol md="6" className="title">
          Retrouvez moi !  
            <div className="title-a">
                <a href="https://github.com/amri-coder"><FontAwesomeIcon icon={faGithub} size="3x" color="green"/> github</a>
            
                <a href="https://www.linkedin.com/in/hafedh-amri-302228187/"><FontAwesomeIcon icon={faLinkedinIn} size="3x" color="green" />  LinkedIn</a>
            </div>
          </MDBCol>
          
        </MDBRow>
       
      </MDBContainer>
     
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>All rights reserved
          &copy; {new Date().getFullYear()} Copyright <p>Developed by : AMRI Maher</p>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;