import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "../css/home.css";

const Home = () => (
    
         
        
<div className="home">
    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={true} transitionLeave={false}>
        <h2>{'AMRI Maher - Ingénieur d\'étude et développement'}</h2>
    </ReactCSSTransitionGroup>
</div>

    
);
export default Home;