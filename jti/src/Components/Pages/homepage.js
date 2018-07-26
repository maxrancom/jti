import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import pc from '../../Assets/images/pc.png';
import STATS from '../../Assets/images/stats.png';
import MANIMG from '../../Assets/images/man.png';
import QUOTE from '../../Assets/images/quote.png';
import SUPPORT_ICON from '../../Assets/images/support.png';
import GRAPH from '../../Assets/images/graph.jpg';
import BTC from '../../Assets/images/BTC.png';
import ALGO from '../../Assets/images/ALGO.png';
import BRAND from '../../Assets/images/brand_logo.jpg';
import NEXT from '../../Assets/images/next.png';
import PREV from '../../Assets/images/prev.png';


class Homepage extends Component {
  render() {
    return (
      
      <div id="HomePage">
        <div className="top-bg bgimg d-flex justify-content-center flex-column">
          <div className="container">
            <h1>THE MOST BEST FOREX SIGNALS DASHBOARD  </h1>
            <h2>Trading with live signals 24/7 with the world-class costumer support exprience</h2>
            <div className="text-center">
              <Link to="/register" id="Register" className="registerBtn mb-3"> OPEN AN ACCOUNT</Link>
            </div>
            <p className="text-white text-center">New to trading? Practice risk-free with a <Link className="text-purple" to="/">Demo account</Link></p>
          </div>
          <div className="bot-support py-3">
            <div className="container">
              <div className="row justify-content-between">
                <div className="support-text d-flex align-items-center">
                  <span className="thin">24/7</span>
                  <span className="text-white">costumer support</span>
                </div>
                <div className="support-text d-flex align-items-center">
                  <span className="thin">24/7</span>
                  <span className="text-white">costumer support</span>
                </div>
                <div className="support-text d-flex align-items-center">
                  <span className="thin">24/7</span>
                  <span className="text-white">costumer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-about container">
          <p className="light text-center py-1 mb-5">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
          <div className="row py-5 relative">
            <div className="col-md-8">
              <h2 className="condensed">WELCOME TO  <span className="font-italic font-font-weight-bolder">JUSTRADEIT</span></h2>
              <div className="entry mb-5">
                <p>Perfect subscription - foreign currency, stock, indices and commodities subscription</p>
                <ul>
                  <li>Signal service for foreign currency, stock, indices and commodities</li>
                  <li>Morning survey sent via email/SMS</li>
                  <li>Online trading news</li>
                  <li>Notifications, updates and alerts via email/SMS</li>
                  <li>Online trading room</li>
                  <li>Technical analyses and forecasts</li>
                </ul>
                <p> Monthly subscription - foreign currency, indices and commodities </p>
                <p>Monthly subscription - stock </p>
                  <p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, its admittedly an odd way for Cicero to sail into the 21st century.</p>
                  <div className="text-center">
                    <Link to="/" className="registerBtn">Learn More</Link>
                    </div>
                  </div>
                </div>

                 <div className="col">
                  <img src={pc} id="pc-img" alt="pc"/>
                </div>
              
                
              </div>
              <div className="row justify-content-md-between justify-content-center points my-5">
                <div className=" one-point">
                  <img className="stats-img"  src={STATS} alt="stats icon"/>
                  <span className="number">99%</span>
                  <span className="name">preformance</span>
                </div>
                <div className=" one-point">
                  <img className="stats-img"  src={STATS} alt="stats icon"/>
                  <span className="number">99%</span>
                  <span className="name">preformance</span>
                </div>
                <div className=" one-point">
                  <img className="stats-img" src={STATS} alt="stats icon"/>
                  <span className="number">99%</span>
                  <span className="name">preformance</span>
                </div>
                <div className=" one-point">
                  <img className="stats-img"  src={STATS} alt="stats icon"/>
                  <span className="number">99%</span>
                  <span className="name">preformance</span>
                </div>
              </div>
            </div>
            <div className="section-testimonial " >
              <div className="container">
                <div className="row">
                  <div className="col-md-6 relative">
                    <img id="Man" src={MANIMG} alt="man img"/>
                  </div>
                  <div className="col-md-6 py-md-5 relative d-flex justify-content-center align-align-items-center">
                    <img className="quote top" src={QUOTE} alt="quote"/>
                    <div className="entry font-italic py-5" >
                      <p>the best choice i ever</p>
                      <p>made in my life is to</p>
                      <p>join just trade it,</p>
                      <p><bolder>never disspointed!</bolder></p>
                      <span className="d-block font-font-weight-bolder name">chris robben</span>
                    </div>
                    <img className="quote bot" src={QUOTE} alt="q"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-why">
              <div className="container c12">
                <h2 className="text-center">WHY TRUST <bolder>JUSTRADEIT?</bolder></h2>
                <div className="support-info row">
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt=""/>
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt="support" />
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt="support" />
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt="support" />
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt="support" />
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end one-s ">
                    <img src={SUPPORT_ICON} alt="support" />
                    <div className="d-flex flex-column ml-2">
                      <span className="title">Costumer service 24/7</span>
                      <span className="content">
                        Low spreads, backed by small margin
                        requirements & competitive leverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-4">
              <div className="container c12">
                <h2 className="text-center mb-4">ALL YOU NEED <bolder className="font-italic">JUSTHERE</bolder></h2>
                <img src={GRAPH} alt="forex-graph" className="mb-5 forex-graph"/>
                <div className="entry light text-center">
                  <p>With our <bolder>revolutional dashboard</bolder> you can excpect</p>
                  <p>   the most of the performance you ever thinking of.</p>
                  <p>   the most advanced forex signals system</p>
                  <p>    is here and waiting for you <bolder>to take advantage! </bolder> </p>
                </div>
                <div className="text-center my-4">
                  <Link to="/" className="registerBtn">START NOW</Link>
                  </div>
                </div>
              </div>
            <div className="section-5">
                <div className="container c12">
                  <h2 className="text-center">NEW WAYS TO TRADE</h2>
                  <div className="row justify-content-between flex-md-row flex-column">
                    <div className="box box-btc relative">
                      <div className="relative">
                        <img src={BTC} alt="bitcoin icon"/>
                        <h3 className="text-white"><bolder>BTC</bolder> TRADING</h3>
                      </div>
                      <div className="lines">
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                      </div>
                    </div>
                    <div className="box box-algo relative">
                      <div className="relative">
                        <img src={ALGO} alt="algo icon"/>
                        <h3 className="text-white"><bolder>ALGO</bolder> TRADING</h3>
                      </div>
                      <div className="lines">
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                        <div className="row">
                          <span className="plus relative d-flex justify-content-center align-items-center"></span>
                          <span className="light">NEW STRATEGY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="section-faq">
                <div className="container">
                  <h2 className="text-center">FAQ <bolder>JUSTASK!</bolder></h2>
                  <div className="qa-container row justify-content-between">
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q1" aria-expanded="false" aria-controls="q1" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q1">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q2" aria-expanded="false" aria-controls="q2" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q2">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q3">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q4" aria-expanded="false" aria-controls="q4" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q4">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q5" aria-expanded="false" aria-controls="q5" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q5">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                    <div className="one-qa">
                      <div className=" d-flex qa" data-toggle="collapse" data-target="#q6" aria-expanded="false" aria-controls="q6" >
                        <div className="plus"></div>
                        <div>Here will Be a Question...</div>
                      </div>
                      <div className="qa-content collapse" id="q6">
                        <div>
                          Here will Be an Answer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="partners mb-5">
                <div className="container">
                  <h2 className="text-center title">OUR <bolder>PARTNERS</bolder></h2>

                  <div className="relative owl-container">

                    <OwlCarousel
                      className="owl-theme logos"
                      loop
                      items={2}
                      margin={10}
                      nav={true}
                      dots={false}
                      navText= {['<img src='+ NEXT +' class="nav-btn next" alt="next-button"/>', '<img src='+PREV + ' class="nav-btn prev" alt="next-button"/>']}
                      smartSpeed ={500}
                      responsive = {

                        {
                          768:{
                            items: 4
                          },
                          1200: {
                            items: 6
                          }
                        }
                      }
                      >
                      <div className="item"><img src={BRAND} alt="brandlogo"/></div>
                      <div className="item"><img src={BRAND} alt="brandlogo"/></div>
                      <div className="item"><img src={BRAND} alt="brandlogo"/></div>
                      <div className="item"><img src={BRAND} alt="brandlogo"/></div>
                      <div className="item"><img src={BRAND} alt="brandlogo"/></div>

                    </OwlCarousel>
                  </div>
                </div>
              </div>
        </div>
          );
        }
      }

      export default Homepage;
