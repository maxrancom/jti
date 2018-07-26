import React, { Component } from "react";
import { Link} from 'react-router-dom';
import Trust from "../Parts/Trust";

class SignalsTrading extends Component {
  render() {
    return (
      <div id="ThePage">
        <div className="title-container d-flex justify-content-center align-items-center">
          <div className="container ">
            <h1 className="text-white">Signals Trading</h1>
          </div>
        </div>
        <div className="container">
          <div className="row py-5 justify-content-between">
            <div className="col-md px-0">
              <div className="row">
                <div className="subscription col-12">
                  <h2>Perfect subscription</h2>
                  <div className="entry">
                    foreign currency, stock, indices and commodities
                    subscription
                  </div>
                  <div className="feature-box my-5">
                    <h3>Perfect subscription Features</h3>
                    <div className="inner-features">
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Signal service for foreign currency, stock, indices and
                        commodities
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Morning survey sent via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading news
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Notifications, updates and alerts via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading room
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Technical analyses and forecasts
                      </div>
                    <div className="text-center">
                    <Link to="/register" className="registerBtn">OPEN AN ACCOUNT</Link>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="subscription col-12">
                  <h2>Monthly subscription </h2>
                  <div className="entry">
                   foreign currency, indices and commodities
                  </div>
                  <div className="feature-box my-5">
                    <h3>Monthly subscription Features</h3>
                    <div className="inner-features">
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Signal service for foreign currency, stock, indices and
                        commodities
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Morning survey sent via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading news
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Notifications, updates and alerts via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading room
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Technical analyses and forecasts
                      </div>
                    <div className="text-center">
                    <Link to="/register" className="registerBtn">OPEN AN ACCOUNT</Link>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="subscription col-12">
                  <h2>Monthly subscription</h2>
                  <div className="entry">
                  stock 
                  </div>
                  <div className="feature-box my-5">
                    <h3>Monthly subscription</h3>
                    <div className="inner-features">
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Signal service for foreign currency, stock, indices and
                        commodities
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Morning survey sent via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading news
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Notifications, updates and alerts via email/SMS
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Online trading room
                      </div>
                      <div className="row">
                        <span className="font-weight-bold">+</span>
                        Technical analyses and forecasts
                      </div>
                    <div className="text-center">
                    <Link to="/register" className="registerBtn">OPEN AN ACCOUNT</Link>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Trust />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignalsTrading;
