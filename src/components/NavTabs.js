import React from 'react';
import '../styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (<header><span>Binuka Witharana</span>
        <ul className="nav-list">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'active' : 'not-active'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ?  'active' : 'not-active'}
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ?  'active' : 'not-active'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ?  'active' : 'not-active'}
        >
          Contact
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;