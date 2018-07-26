import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';



class MobileLogin extends Component {
  render() {
    return (
      <ul className="mobile_login">
          <li className="">
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/register" className="register">OPEN AN ACCOUNT</Link>
          </li>
      </ul>
    );
  }
}

export default MobileLogin;
