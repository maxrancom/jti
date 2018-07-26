import React, { Component } from 'react';
import {Form,Text} from 'react-form';

import ENV from '../../Assets/images/env.png';
class SideContact  extends Component {
  render () {
    return(
      <div className="side-contact">
        <div className="relative form-wrap">
          <div className="form-btn d-flex align-items-center ">
            <img src={ENV} alt="env icon"/>
            <span className="light">FAST</span>
            <span className="">CONTACT</span>
          </div>
          <div className="form">
          <Form render={({
            submitForm
          }) => (
            <form onSubmit={submitForm}>
            <div>
              <label htmlFor="fullname">Full Name:</label>
              <Text field="fullname" placeholder='' />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <Text field="phone" placeholder='' />
            </div>
              <button type="submit">Submit</button>
            </form>
          )} />
          </div>
        </div>
      </div>
    )
  }
}

export default SideContact;
