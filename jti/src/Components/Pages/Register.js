import React, { Component } from "react";
import LOGO from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";
import Trust from "../Parts/Trust";
import { Form, Text, Checkbox } from "react-form";
class Register extends Component {
  render() {
    return (
      <div id="RegistrationPage" className="d-flex align-items-center">
        <div className="container relative ">
          <div className="box">
            <div className="row ">
              <Link to="/" className="backtohome">
                <i className="fas fa-times" />
              </Link>
              <div className="col-10 mx-auto">
                <div className="row justify-content-between py-3">
                  <img src={LOGO} alt="JTI" />
                  <div className="login-wrap d-flex flex-column align-items-center">
                    <span className="notice">Already have an account?</span>
                    <Link to="/login" className="login-btn">
                      LOGIN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row inner-content py-5 px-5">
              <div className="form-wrap col-md-6 pr-md-5">
                <Form
                  render={({ submitForm }) => (
                    <form id="contactform" onSubmit={submitForm}>
                      <div className="row justify-content-between">
                        <div className="col3">
                          <label htmlFor="fullname">
                            Full Name:<span className="requierd">*</span>
                          </label>
                          <Text
                            field="fullname"
                            name="fullname"
                            placeholder=""
                          />
                        </div>
                        <div className="col3">
                          <label htmlFor="email">
                            Email: <span className="requierd">*</span>
                          </label>
                          <Text field="email" name="email" placeholder="" />
                        </div>
                        <div className="col3">
                          <label htmlFor="phone">
                            Phone:<span className="requierd">*</span>
                          </label>
                          <Text field="phone" name="phone" placeholder="" />
                        </div>
                        <div className="col3">
                          <div className="">
                            <Checkbox
                              field="agreesToTerms"
                              name="agreesToTerms"
                            />
                            <span
                              htmlFor="agreesToTerms"
                              className="agreesToTerms"
                            >
                              I agree to receive marketing emails from JTI
                            </span>
                          </div>
                        </div>

                        <input type="submit" value="SUBMIT" />
                      </div>
                    </form>
                  )}
                />
              </div>
              <div className="col-md-6 pl-md-5">
                <Trust />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
