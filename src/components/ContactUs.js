import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const ContactUs = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Une question, une remarque ? Veuillez me contacter **</p>
        <div className="grey-text">
          <MDBInput label="Votre nom *" icon="user" group type="text" validate error="wrong"
            success="right"/>
          <MDBInput label="Votre E-mail *" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Objet" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Votre message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Envoyer
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
          
          
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};


export default ContactUs;