import React, { Component } from 'react';



class About extends Component {
  render() {
    return (
      <div id="ThePage">
        <div className="title-container d-flex justify-content-center align-items-center">
          <div className="container ">
            <h1 className="text-white">ABOUT US</h1>
          </div>
        </div>
        <div className="container py-5 my-5">
        <div className="row justify-content-between">
            <div className="col-md-4 pr-5">
              <div className="nav flex--md-column flex-row nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-1" data-toggle="pill" href="#v-pills-1-tab" role="tab" aria-controls="v-pills-1-tab" aria-selected="true"> <i className="fas fa-info-circle "></i>About JTI</a>
                <a className="nav-link" id="v-pills-2" data-toggle="pill" href="#v-pills-2-tab" role="tab" aria-controls="v-pills-2-tab" aria-selected="false"><i className="fas fa-user-tie "></i>Trading Signals</a>
                <a className="nav-link" id="v-pills-3" data-toggle="pill" href="#v-pills-3-tab" role="tab" aria-controls="v-pills-3-tab" aria-selected="false"><i className="fas fa-file-alt"></i> The System</a>
                {/* <a className="nav-link" id="v-pills-4" data-toggle="pill" href="#v-pills-4-tab" role="tab" aria-controls="v-pills-4-tab" aria-selected="false"><i className="far fa-handshake "></i> Company Values</a> */}
                <a className="nav-link" id="v-pills-5" data-toggle="pill" href="#v-pills-5-tab" role="tab" aria-controls="v-pills-5-tab" aria-selected="false"><i className="fas fa-question-circle"></i> Why JTI</a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-1-tab" role="tabpanel" aria-labelledby="v-pills-1-tab">
                  <h2>About JTI</h2>
                  <div className="entry">
                    <p>We are a group of professional traders with many years of experience in all areas of the capital market and have traded with financial institutions and large investment banks worldwide.</p>
           
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-2-tab" role="tabpanel" aria-labelledby="v-pills-2-tab">
                  <h2> Trading Signals</h2>
                  <div className="entry">
                    <p>Today, we provide professional trading signals using unique trading techniques we have developed over the years. The techniques have been examined and tested in real-time for several years by professional traders. We are proud to say we enjoy very high success rates and usually predict future market developments!</p>
                
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-3-tab" role="tabpanel" aria-labelledby="v-pills-3-tab">
                  <h2>System</h2>
                  <div className="entry">
                    <p>Our system uses a computer program based on pure mathematics combined with rich human experience, to help choose the most successful transactions. Our team of analysts follows the various financial markets in real time and provides reliable trading signals the entire time the markets are open. The chief analyst receives the total number of trading alerts at the end of the process, and they are sent to you after filtering.</p>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-4-tab" role="tabpanel" aria-labelledby="v-pills-4-tab">
                  <h2>Company Values</h2>
                  <div className="entry">
                    <p>TradeFred was established in 2016, providing Forex and CFD traders with a trusted and hassle-free investment solution. We deliver a dedicated, client-centric service available in multiple languages.
                  </p>
                    <p>Part of MagicPath Capital, TradeFred is fully authorised and regulated by the Vanuatu Financial Services Commission (VFSC). As such, we meet the highest standards of corporate governance and financial reporting, ensuring a secure trading environment for clients.
                    </p>
                    <p> The TradeFred board of directors consists of experts in the fields of financial services, marketing and affiliate management. Our experience allows us to offer a superior bespoke solutions to both clients and partners.
                   </p>
                    <p>We are a multi-national company with offices around the world.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-5-tab" role="tabpanel" aria-labelledby="v-pills-5-tab">
                  <h2>Why JTI</h2>
                  <div className="entry">
                    <p>TradeFred was established in 2016, providing Forex and CFD traders with a trusted and hassle-free investment solution. We deliver a dedicated, client-centric service available in multiple languages.
                  </p>
                    <p>Part of MagicPath Capital, TradeFred is fully authorised and regulated by the Vanuatu Financial Services Commission (VFSC). As such, we meet the highest standards of corporate governance and financial reporting, ensuring a secure trading environment for clients.
                    </p>
                    <p> The TradeFred board of directors consists of experts in the fields of financial services, marketing and affiliate management. Our experience allows us to offer a superior bespoke solutions to both clients and partners.
                   </p>
                    <p>We are a multi-national company with offices around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
