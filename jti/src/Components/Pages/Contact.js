import React, { Component } from 'react';
import Trust from '../Parts/Trust';
import {Form,Text,TextArea} from 'react-form';



class Contact extends Component {
  render() {
    return (
      <div id="ContactPage">
        <div className="title-container d-flex justify-content-center align-items-center">
          <div className="container ">
            <h1 className="text-white">Contact US</h1>
          </div>
        </div>
        <div className="container">
            <div className="row py-5 justify-content-between">
            <div className="col-md pr-5">
              <p>Please contact us by email <a href="mailto:INFO@JUSTRADEIT.COM" target="_blank" rel="noopener noreferrer">INFO@JUSTRADEIT.COM</a> to receive more information or register for the service, or fill out the form below</p>
              <p>Please complete the form below and we will contact you as soon as possible. </p>
              <div className="form">
              <Form render={({
            submitForm
          }) => (
            <form id="contactform" onSubmit={submitForm}>
            <div className="row justify-content-between">
              <div className="col3"> 
                <label htmlFor="fullname">Full Name:<span class="requierd">*</span></label>
                <Text field="fullname" name="fullname"  placeholder='' />
              </div>
              <div className="col3">
                <label htmlFor="email">Email: <span class="requierd">*</span></label>
                <Text field="email" name="email" placeholder='' />
              </div>
              <div className="col3">
                <label htmlFor="phone">Phone:<span class="requierd">*</span></label>
                <Text field="phone" name="phone" placeholder='' />
              </div>
              <div className="col3">
                <label htmlFor="subject">Subject:<span class="requierd">*</span></label>
                <Text field="subject" name="subject" placeholder='' />
              </div>
              <div className="col-12 px-0">
                <TextArea field="textarea" name="textarea" placeholder='Type your message here *' />
              </div>
              <input type="submit" value="SEND"/>
            </div>
            </form>
          )} />
              </div>
            </div>
                <div className="col-md-4">
                   <Trust/>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Contact;
