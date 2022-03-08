import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
      <div className="Footer">
        <a href="https://github.com/BinukaW" target="_blank" rel="noreferrer" > 
            <img src ={require("../components/assets/github-icon.png")} alt="gitHub logo"/>
        </a>

        <a href="https://www.linkedin.com/in/binuka-witharana-69b12579/" target="_blank" rel="noreferrer" >
            <img src ={require('../components/assets/linkedIn-icon.png')} alt="linkedIn logo"/>
        </a>
   
        <a href="mailto:binuka.witharana@gmail.com?" target="_blank" rel="noreferrer" >
            <img src ={require('../components/assets/gmail-icon.png')} alt="mail icon"/>
        </a>

      </div>
    );
  }
  
  export default Footer;