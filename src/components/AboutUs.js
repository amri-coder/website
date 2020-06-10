import React from "react";
import "../css/about.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faLinux, faPhp, faSymfony, faReact, faNodeJs, faJava, faJs, faHtml5, faCss3, faDiscord, faDocker, faSkype, faGithub, faGit, faJoomla, faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons' ;

const AboutUs = () => (
<div className="about">
  <table>
    <td>
        <h4 className="h4">AMRI Maher</h4>
              <h5>Ingénieur | | Consultant</h5>
              <h5>Informatique & Développeur</h5>
        <br />
        <b>OBJECTIF</b>
              <lu>
                <li>Conception et développement d'applications</li>
                <li>Intégration et tests</li>
                <li>Agile (Scrum/Kanban)</li>
                <li>Analyse et interprétation de spécifications techniques et fonctionnelles</li>
              </lu>
        <br />
        <b>FORMATION</b>
                <p>Master Informatique HPC</p>
        <br />
        <b>CONNAISSANCE TECHNIQUES</b>
            <p><u>OS</u></p>
                <p><FontAwesomeIcon icon={faWindows} size="4x" /></p>
                <p><FontAwesomeIcon icon={faLinux} size="4x" /></p>
            <p><u>Langages & APIs</u></p>
                <p>PHP, Java, XML, JDBC, HTML5, CSS3, JavaScript, Symfony, React JS, Node JS, Cordova, Docker, ....</p>
            <p><u>CMS</u></p>
                <p>Joomla, PrestaShop, Wordpress</p>
            <p><u>Serveurs</u></p>
              <p>LiveServers, Apache Tomecat, WAMP/LAMP</p>
            <p><u>IDE</u></p>
              <p>Eclipse, Intellij Idea, NetBeans, PhpStorm, Visual Studio Code, Android Studio, ...</p>
            <p><u>Bases de données</u></p>
              <p>MySQL, Oracle, Doctrine, SQL: Postgre SQL, noSQL: MongoDB ...</p>
            <p><u>Outils</u></p>
              <p>FileZilla, GitHub, Git</p>
            <p><u>Bureautique</u></p>
              <p>Maîtrise de Pack Office</p>
            <p><u>Méthode d’analyse</u></p>
              <p>UML</p>
            <p><u>Autres</u></p>
              <p>Installation complète de matériel et logiciel d’un ordinateur</p>
            <b>EXPÉRIENCES PROFESSIONNELLES</b>
              <p>Voir mon cv ...</p>
            <b>CENTRES D’INTÉRÊT</b>
            <p>Sport : Football</p>
            <p>Hobbies : Internet, Cinéma, Nouvelle technologies</p>
      </td>
      
      <td>
        <p>
        <FontAwesomeIcon icon={faPhp} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faSymfony} size="4x" color="navy" />
        <FontAwesomeIcon icon={faReact} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faNodeJs} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faJava} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faJs} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faHtml5} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faCss3} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faDiscord} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faDocker} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faSkype} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faGithub} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faGit} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faJoomla} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faWordpress} size="4x" color="navy"/>
        <FontAwesomeIcon icon={faBootstrap} size="4x" color="navy"/>
        
      
        </p>
        
      </td>
  </table>
</div>
)

export default AboutUs;