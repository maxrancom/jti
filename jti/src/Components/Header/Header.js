import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import LOGO from '../../Assets/images/logo.png';
import Navigation from './Navigation';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import MobileNav from './MobileNav';
import MobileLogin from './MobileLogin';


class Header extends Component {
  render() {
    return (
      <header className="fixed-top py-3">
      <BrowserView device={isBrowser}>
        <div className="container px-0">
          <div className="d-flex justify-content-between align-content-center">
            <div className="logo">
              <Link to="/">
                <img src={LOGO} alt="JTI"/>
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
        </BrowserView>
        <MobileView device={isMobile}>
        <div className="container">
        <div className="row justify-content-between align-items-center">
          <div id="MobNav">
            <div id="MobNavBtn">
              <span></span>
              <span></span>
              <span></span>
            </div>
              <MobileNav/>
          </div>
          <div className="d-flex justify-content-center align-content-center">
            <div className="logo">
              <Link to="/">
                <img src={LOGO} alt="JTI"/>
              </Link>
            </div>
          </div>
        <div className="login">
        <i className="fas fa-sign-in-alt login-icon "></i>
        <MobileLogin/>
        </div>
        </div>
        </div>
        </MobileView>
      </header>
    );
  }
}

export default Header;
