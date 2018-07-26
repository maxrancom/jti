import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';



class Navigation extends Component {
  render() {
    return (
      <ul className="main_menu justify-content-end">
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
        <div className="d-flex flex-column login-btns">
          <li className="mb-2">
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/register" className="register">OPEN AN ACCOUNT</Link>
          </li>
        </div>

      </ul>
    );
  }
}

export default Navigation;
