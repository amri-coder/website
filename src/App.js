import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from "./components/Home.js";
  import AboutUs from './components/AboutUs';
  import ContactUs from './components/ContactUs';
  import Footer from './components/Footer';
 // import "./App.css";

class App extends React.Component{

    render(){
        return(
            <div className="App">
                <div className="row">
                    <div className="col-md-12">
                      
                        <Router>

                            <Navbar bg="blue" variant="primary" expand="lg" sticky="top">

                                <Navbar.Brand href="/">Amri  </Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                <Navbar.Collapse id="basic-navbar-nav">

                                    <Nav className="mr-auto">

                                    <Nav.Link href="/">Accueil</Nav.Link>

                                    <Nav.Link href="/about-us">À propos</Nav.Link>

                                    <Nav.Link href="/contact-us">Contact</Nav.Link>

                                    <NavDropdown title="Les catégories" id="basic-nav-dropdown">

                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                                        <NavDropdown.Divider />

                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

                                    </NavDropdown>

                                    </Nav>

                                    <Form inline>

                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                                    <Button variant="outline-success">Search ...</Button>

                                    </Form>

                                </Navbar.Collapse>

                            </Navbar>

                            <br />

                            <Switch>

                                <Route exact path="/">

                                    <Home />

                                </Route>

                                <Route path="/about-us">

                                    <AboutUs />

                                </Route>

                                <Route path="/contact-us">

                                    <ContactUs />

                                </Route>

                            </Switch>

                        </Router>
                        <Footer />

                    </div>

                </div>
            </div>
     
        )  
 
    }
}




export default App;