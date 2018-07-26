import React, { Component } from "react";
import LOGO from "../../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { Form, Text, Checkbox } from "react-form";
class Login extends Component {
  render() {
    return (
      <div id="RegistrationPage" className="d-flex align-items-center">
        <div className="col-md-4 mx-auto relative ">
          <div className="box">
            <div className="row ">
              <Link to="/" className="backtohome">
                <i className="fas fa-times" />
              </Link>
              <div className="col-10 mx-auto">
                <div className="row justify-content-center py-3">
                  <img src={LOGO} alt="JTI" />
                
                </div>
              </div>
            </div>
            <div className="row inner-content py-3 px-2">
              <div className="form-wrap col-md-12 px-3 border-0">
                <Form
                  render={({ submitForm }) => (
                    <form id="contactform" className="loginform" onSubmit={submitForm}>
                      <div className="row justify-content-between">
                        <div className="col3">
                          <label htmlFor="fullname">
                            Account ID:<span className="requierd">*</span>
                          </label>
                          <Text
                            field="account_id"
                            name="account_id"
                            placeholder=""
                          />
                        </div>
                        <div className="col3">
                          <label htmlFor="email">
                            Password: <span className="requierd">*</span>
                          </label>
                          <Text field="password" name="password" placeholder="" />
                        </div>
                        <div className="col3">
                          <div className="">
                            <Checkbox
                              field="remember-me"
                              name="remember-me"
                            />
                            <span
                              htmlFor="remember-me"
                              className="remeberme"
                            >
                              Remember Me
                            </span>
                          </div>
                        </div>
               

                        <input type="submit" value="SUBMIT" />
                      </div>
                    </form>
                  )}
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
