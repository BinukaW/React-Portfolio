import React from 'react';
import '../../styles/Pages.css';


export default function Home() {
  return (
    <div className="page-style">
      <h1>About me</h1>
      <p>
      <img className="prof-pic" src ={require('../../components/assets/Profile1.jpg')} alt="avatar"/>
      Hi there!  I am Science Graduate with a Biochemistry major from Monash University
          I have experience in the Medical, hospitality, retail and science industry. 
          However, I have been fascinated by the working of
          different front-end systems and this is where my interest for design
          and development comes from. 
          <br></br>
          <br></br>You can view my previous work history on
          <a href="https://www.linkedin.com/feed/" class="links"> LinkedIn.</a>
          Outside of work I love reading, photography and traveling.
          I am currently learning the coding languages allowing me to gain
          experience and further my knowledge in web development.

      </p>
      <h3> <a href={require("../../components/assets/BinukaResume.pdf")} target="_blank" rel="noreferrer">Full Resume</a></h3>
    </div>
  );
}

