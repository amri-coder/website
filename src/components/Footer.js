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
                <a href="https://github.com/amri-coder"><FontAwesomeIcon icon={faGithub} /> github</a>
            </div>
            <div className="title-b">
            
                <a href="https://www.linkedin.com/in/hafedh-amri-302228187/"><FontAwesomeIcon icon={faLinkedinIn} />  LinkedIn</a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <b>Developed by : AMRI Maher</b>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;