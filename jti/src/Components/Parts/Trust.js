import React, { Component } from 'react';
import WRITING from '../../Assets/images/writing.svg';
import PHONE from '../../Assets/images/phone-support-24-hours.svg';
import CREDITCARD from '../../Assets/images/credit-card-lock-symbol.svg';


class Trust extends Component {
  render() {
    return (
      <div id="SideTrust">
        <h2>Why Trust JTI</h2>
        <div className="block">
            <div className="d-flex align-items-center one-row">
            <img src={CREDITCARD} alt="credit cart icon"/>
                <span>Client assets held in segregated accounts</span>
            </div>
            <div className="d-flex align-items-center one-row">
            <img src={PHONE} alt="support 24/7"/>
                <span>Dedicated client
support network</span>
            </div>
            <div className="d-flex align-items-center one-row">
            <img src={WRITING} alt="writing icon"/>
                <span>Fully-Licensed & Regulated</span>
            </div>
        </div>
      </div>
    );
  }
}

export default Trust;
