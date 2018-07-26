import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';



class MobileNav extends Component {
  render() {
    return (
      <ul className="mobile_menu">
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/trading">SIGNALS TRADING</Link>
        </li>
        <li>
          <Link to="/forexzone">FOREX ZONE</Link>
        </li>
        <li>
          <Link to="/managment">MANAGMENT</Link>
        </li>
        <li>
          <Link to="/algotrading">ALGO TRADE</Link>
        </li>
        <li>
          <Link to="/resources">RESOURCES</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>

      </ul>
    );
  }
}

export default MobileNav;
