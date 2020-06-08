import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "../css/Footer.css";

// /* <MDBFooter color="" className="font-small pt-4 mt-4">*/
const Footer = () => {
  return (
      <div className="footer">
  
   <MDBFooter>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"><FontAwesomeIcon icon={faHome} />  Site web perso </h5>
            <p className="title">
            LE CODAGE SIMPLIFIÉ
            </p>
          
          </MDBCol>
          <MDBCol md="6" className="title">
          Retrouvez moi !  
            <ul>
              <li className="title2">
                <a href="https://github.com/amri-coder">github</a>
              </li>
              <li>
                <a href="#!">LinkedIn</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
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