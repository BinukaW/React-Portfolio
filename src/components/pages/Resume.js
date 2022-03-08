import React from 'react';
import '../../styles/Pages.css';

export default function Resume() {
  return (
    <div class="page-style skills">
      <h1>Skills</h1>
       <ul>
       <h3>Front-end Technologies</h3>
      <li> JavaScript</li> 
      <li> HTML5</li> 
      <li> CSS3</li> 
      <li> React</li>   
      <li> NPM</li>  
      <li> JQuery</li> 
      <li> Bootstrap</li>
       </ul>
       <ul>
       <h3>Back-end Technologies</h3>
      <li> NodeJS</li> 
      <li> Express.js</li> 
      <li> SQL</li> 
      <li> Mongo</li>   
      <li> OOP</li>  
      <li> GraphQL</li> 
      <li> REST API</li>
       </ul>
       <h3> <a href={require("../../components/assets/BinukaResume.pdf")} target="_blank" rel="noreferrer">Full Resume</a></h3>
    </div>
  );
}