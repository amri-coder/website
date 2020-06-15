import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import "../css/contact.css";



const mapStyles = {
  width: '40%',
  height: '40%'
};

class  ContactUs extends React.Component{
  
  
  render (){
        return (
          <table className="tableContact">
            <tr>
              <td>
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
              </td>
            
             <p><img src="https://img.icons8.com/nolan/50/cell-phone.png"/>   06.52.96.02.44</p>
      <p><img src="https://img.icons8.com/nolan/50/email.png"/> amri.maher@yahoo.com</p>
      <p><img src="https://img.icons8.com/nolan/50/address.png"/> 36 Avenue de Fouilleuse, 92500 Rueil Malmaison, IDF, France</p>
              
              <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 48.8534,
         lng: 2.3488
        }}
      />   
          </tr>
          </table>
        );
        }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB5CLuSDBscT8Y4bU4vozK12eMPHutQuL4'
})(ContactUs);
