import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "../css/home.css";


import RobotAnimated from "./robot-animated";

const Home = () => (
    
         
        
<div className="home">
    <RobotAnimated />
    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={true} transitionLeave={false}>
        <h2>{'AMRI Maher - Ingénieur d\'étude et développement'}</h2>
    </ReactCSSTransitionGroup>
</div>

    
);
export default Home;