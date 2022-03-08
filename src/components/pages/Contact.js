import React from 'react';
import '../../styles/Pages.css';

export default function Contact() {
  return (
    <div class="page-style">
      <h1>Contact</h1>
      <br></br>
      <form action="https://formspree.io/f/xleaagkl"  method="POST">
        <label> Name</label><br></br>
        <input type="name" name="_replyto" required/><br></br>
        <label> Email</label><br></br>
        <input type="email" name="_replyto" required/><br></br>
        <label> Message</label><br></br>
        <textarea name="message" required></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}