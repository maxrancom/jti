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
import BG1 from "../../Assets/images/topbg2.jpg";


class Homepage extends Component {
  render() {
    return (

      <div id="HomePage">
        <div className="relative">
          <OwlCarousel
            className="owl-theme top-slider"
            loop
            items={1}
            margin={10}
            nav={true}
            dots={false}
            autoplay={true}
            navText= {['<img src='+ NEXT +' class="nav-btn next" alt="next-button"/>', '<img src='+PREV + ' class="nav-btn prev" alt="next-button"/>']}
            smartSpeed ={1000}>
            <div className="item bgimg top-bg">
              <div className="overlay"></div>
              <img src={BG1} alt="jti-forex"/>
              <div className="container relative">
                <h1>The Most best Algorithm More than 10 Years Proven  Results  </h1>
                <div className="text-center">
                  <Link to="/register" id="Register" className="registerBtn mb-3"> CHECK IT NOW</Link>
                </div>
              </div>
            </div>
            <div className="item bgimg top-bg">
              <div className="overlay"></div>
              <img src={BG1} alt="jti-forex"/>
              <div className="container relative">
                <h2>Find Out Why Most Of The Trader Chose Jti Trading Signals  </h2>
                <div className="text-center">
                  <Link to="/register" id="Register" className="registerBtn mb-3"> JOIN NOW</Link>
                </div>
              </div>
            </div>
            <div className="item bgimg top-bg">
              <div className="overlay"></div>
              <img src={BG1} alt="jti-forex"/>
              <div className="container relative">
                <h2>The Best Of Stock Trading signals  </h2>
                <div className="text-center">
                  <Link to="/register" id="Register" className="registerBtn mb-3"> CHECK IT NOW</Link>
                </div>
              </div>
            </div>

          </OwlCarousel>
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
            <div className="entry">
              <p>We are a group of professional traders with many years of experience in all areas of the capital market and have traded with financial institutions and large investment banks worldwide.</p>
              <p>we provide professional trading signals using unique trading techniques we have developed over the years. The techniques have been examined and tested in real-time for several years by professional traders. We are proud to say we enjoy very high success rates and usually predict future market developments!</p>
              <p>Our system uses a computer program based on pure mathematics combined with rich human experience, to help choose the most successful transactions. Our team of analysts follows the various financial markets in real time and provides reliable trading signals the entire time the markets are open. The chief analyst receives the total number of trading alerts at the end of the process, and they are sent to you after filtering.
                We provide Forex trading signals, stocks, indices, and commodities, in various world markets.</p>

            </div>
          </div>
        </div>
        <div className="section-4">
          <div className="container c12">
            <h2 className="text-center mb-4">ALL YOU NEED <bolder className="font-italic">JUSTHERE</bolder></h2>
            <img src={GRAPH} alt="forex-graph" className="mb-5 forex-graph"/>
            <div className="entry light text-center">
              <p>With our <bolder>revolutionary algorithm</bolder> you can excpect</p>
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
                  <div>Why should I choose: Just Trade It</div>
                </div>
                <div className="qa-content collapse" id="q1">
                  <div>
                    <p>There are a lot of companies that provide all kind of services in the online market in general and trading signals particular all over the world. However, when you choose the services that JTI offers, you will immediately see the difference.</p>
                    <p>The difference between us and other companies is that we provide signal service in a very high level, both in the quality and visibility of the signal and also thanks to our new dashboard signals that sync online you will be the first to know about any change in the signals, you will immediately notify or by mail or by SMS.</p>
                    <p>We have advantage over other companies by always knowing what you are entering and whether this is the level of risk Which we are interested in taking, we execute risk management at every signal and take care to accompany the transaction all the way from opening to closing. JTI operates with complete transparency</p>
                    <p>All signals are automatically recorded in the system and subscribers can view and enter it any Stage.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q2" aria-expanded="false" aria-controls="q2" >
                  <div className="plus"></div>
                  <div>Are your trading signals free?? </div>
                </div>
                <div className="qa-content collapse" id="q2">
                  <div>
                    <p>you can try our FREE signals for EUR/USD you will receive it by email, if you would like to receive signals from all pairs via SMS and Email, a subscription is required</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3" >
                  <div className="plus"></div>
                  <div>How the Service on Stocks Works?</div>
                </div>
                <div className="qa-content collapse" id="q3">
                  <div>
                    <p>The service includes shares that reach important prices. Every day before the start of trading day I send a list of shares that includes the price of entry, the price of stop loss, the price of taking profit</p>
                    <p>In addition, all trades are calculated at a max loss of $ 100. This calculation is derived from the number of shares</p>
                    <p>About the method: The method has been tested over the years, the results I enclose in separate tables the ratio of profit to initial loss is: 1: 1.5 All stocks are with a turnover of 1 million shares and more the price ranges from $ 10 to $ 50</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q4" aria-expanded="false" aria-controls="q4" >
                  <div className="plus"></div>
                  <div>Should I have knowledge in the capital market before the signals or algo subscription?</div>
                </div>
                <div className="qa-content collapse" id="q4">
                  <div>
                    <p>No. you don’t need experience, just open an account with one of the broker and follow our signals.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q5" aria-expanded="false" aria-controls="q5" >
                  <div className="plus"></div>
                  <div>In which company should I open a trading account?</div>
                </div>
                <div className="qa-content collapse" id="q5">
                  <div>
                    <p>We prefer to trade in banks that way we work</p>
                    <p>&nbsp; In cooperation with Swissquote bank one of the largest trading banks in Switzerland with protection of up to 100 thousand Swiss francs per account, and exceptional trading conditions if you open account from our link you will be entitled to a 70% discount on all our services.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q6" aria-expanded="false" aria-controls="q6" >
                  <div className="plus"></div>
                  <div>How long will my account will be activated after a subscription?</div>
                </div>
                <div className="qa-content collapse" id="q6">
                  <div>
                    Usually it's not taking more than 1 hour.
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q7" aria-expanded="false" aria-controls="q7" >
                  <div className="plus"></div>
                  <div>Can I get investor password of your account to see your Algo trading in action?</div>
                </div>
                <div className="qa-content collapse" id="q7">
                  <div>
                    <p>Yes. &nbsp;we are among the few companies that provide full transparency in our algorithms, you can access to our account all times and check our systems in order to see our live result and our history result. and make a decision whether it suits you or not, feel free to send us mail to: <a href="mailto:info@Justradeit.com">info@Justradeit.com</a> and request investor password to our live account.</p>
<p>Important: We not holding client accounts with us, we do not have access to your account, after porches algo trading service we send you an email with expert to install in your private computer and that is it.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q8" aria-expanded="false" aria-controls="q8" >
                  <div className="plus"></div>
                  <div>Do you offer a money management service?</div>
                </div>
                <div className="qa-content collapse" id="q8">
                  <div>
                    <p>Yes. Please contact us to <a href="mailto:info@justradeit.com">info@justradeit.com</a> in order to get more details.</p>
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
