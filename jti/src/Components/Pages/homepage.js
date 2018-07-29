import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Form,Text,TextArea} from 'react-form';
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
        </div>
        <div className="section-testimonial " >
          <div className="container">
            <div className="row">
              <div className="col-md-6 relative">
                <img id="Man" src={MANIMG} alt="man img"/>
              </div>
              <div className="col-md-6 py-md-5 relative d-flex justify-content-center align-align-items-center">
                <img className="quote top" src={QUOTE} alt="quote"/>
                <OwlCarousel
                  className="recs-slider"
                  items = {1}
                  loop
                  margin={10}
                  nav={false}
                  dots={false}
                  navText= {['<img src='+ NEXT +' class="nav-btn next" alt="next-button"/>', '<img src='+PREV + ' class="nav-btn prev" alt="next-button"/>']}
                  smartSpeed ={500}
                  autoplay= {2000}
                  >
                  <div className="item relative">
                    <div className="entry font-italic py-5" >
                      <p>I had to learn the hard way that something was missing in my trading style... I worked with many signal providers both in Israel and overseas, but none gave me what I was looking for. Everything was too immediate. But I continued  looking until I found Pro Signals, the only company that provided me with comprehensive information on signal s and let me decide for myself whether or not it’s worth it for me to  enter the signal. Thank you signals that include income ratio, loss ratio, and the risk level. Thank you Pro Signals.
                      </p>
                      <span className="d-block font-font-weight-bolder name">Josef S.</span>
                    </div>
                  </div>
                  <div className="item relative">
                    <div className="entry font-italic py-5" >
                      <p>As I see it, you have two choices: you can either continue doing what you have been doing up until now, and if you were successful, go ahead, or simply connect to Pro Signals. There were a couple of really great guys, named Baruch and Shlomi, who helped me a lot with everything I wanted. I received good signals and they provided me with free courses that usually cost tens of thousands of shekels. They are just awesome. I do not have one bad word to say about them.
                      </p>
                      <span className="d-block font-font-weight-bolder name">Richard   V.</span>
                    </div>
                  </div>
                  <div className="item relative">
                    <div className="entry font-italic py-5" >
                      <p>After much searching I found a company that provided a 24/7 service on market signals, information and courses that increased my knowledge, which, to tell you the truth, was not up to par. Pro Signals helped me become successful with regulated supervision and an advanced trading platform. I got everything I needed from them. The signals are amazing. But don’t take my word for it—Go ahead and  try for yourself.
                      </p>
                      <span className="d-block font-font-weight-bolder name">Eduard  B.</span>
                    </div>
                  </div>



                </OwlCarousel>
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
                <a className="graph" href="https://www.myfxbook.com/members/edalgo/silver-white/2545832"><img   border="0" src="https://widgets.myfxbook.com/widgets/2545832/large.jpg"/></a>
              </div>
              <div className="box box-algo relative">
                <div className="relative">
                  <img src={ALGO} alt="algo icon"/>
                  <h3 className="text-white"><bolder>ALGO</bolder> TRADING</h3>
                </div>

                <a className="graph" href="https://www.myfxbook.com/members/edalgo/yellow-gold/2547727"><img   border="0" src="https://widgets.myfxbook.com/widgets/2547727/large.jpg"/></a>

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
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q9" aria-expanded="false" aria-controls="q9" >
                  <div className="plus"></div>
                  <div>How many signals do you send each day?</div>
                </div>
                <div className="qa-content collapse" id="q9">
                  <div>
                    <p>It's all about the market. We carefully examine the market situation of important messages and important indicator etc. our system scans the market each minute, our system scans and measures the market constantly to detect improper movement in the market. The detection is done in a smart manner which is suitable for different market conditions, and therefore the system is profitable in every market case since 2000. &nbsp;</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q10" aria-expanded="false" aria-controls="q10" >
                  <div className="plus"></div>
                  <div>What is a Robot Silver?</div>
                </div>
                <div className="qa-content collapse" id="q10">
                  <div>
                    <p>The uniqueness of "Silver Robot" is that it does not work on indicators which react with big delay.</p>
                    <p>&nbsp;</p>
                    <p>The robot scans and measures the market constantly to detect improper movement in the market. The detection is done in a smart manner which is suitable for different market conditions, and therefore the robot is profitable in every market case since 2000. When the robot detects improper movement, it starts to enter the trend direction in small quantities, in case the trend continues the robot adds quantities. &nbsp;The position management is done in a clever manner, it includes a combination of several different algorithms for managing the position and determining the stop and the profit.&nbsp;On one hand it minimizes the losses by implementing clever tactics to manage the position, and on the other hand it maximizes the profit. In case the market returns sharply in the other direction the robot will try to catch the change.&nbsp;The robot operates on several currencies-pairs, and in each currency-pair, it operates simultaneously over several time frames, so we have about 30 robots operating simultaneously and together achieve a stable yield.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q11" aria-expanded="false" aria-controls="q11" >
                  <div className="plus"></div>
                  <div>What is a golden robot?</div>
                </div>
                <div className="qa-content collapse" id="q11">
                  <div>
                    <p>The algorithm scans the market to identify ideal times for trading and to filter out problematic trading times, it&rsquo;s done in the following way: &nbsp;The robot gathers information from several of different sources and indicators: Moving Averages, ATR, StdDev. All the collected information is converted into a unique formula [based on the statistics of many years] and according to this, the robot determines the current state of the market (Market strength, trends, shuffle, etc.) When determined by the algorithm that the market is currently ideal for trading, the robot will open positions based on several models that based on understanding of the market movements, strong patterns and critical price levels.&nbsp;</p>
                    <p>The position management is done in a special way with a stop-loss and a take-profit according to the market. In addition, the stop-loss is trailed forward with the market movement. The position is divided into 3 different profit targets per third of the position, to maintain diversification and stability.</p>
                    <p>&nbsp;</p>
                    <p>The robot operates on 12 currencies-pairs, and in each currency-pair, it operates on several time frames, so that we have additional dispersion on the investment portfolio.</p>
                  </div>
                </div>
              </div>
              <div className="one-qa">
                <div className=" d-flex qa" data-toggle="collapse" data-target="#q12" aria-expanded="false" aria-controls="q12" >
                  <div className="plus"></div>
                  <div>What types of payment do you accept?</div>
                </div>
                <div className="qa-content collapse" id="q12">
                  <div>
                    <p>We accept all types of payments, you can make bank transfers, you can pay in the PayPal account, and you can pay in all types of credit cards.</p>
                    <p>For more details please contact us at: <a href="mailto:info@Justradeit.com">info@Justradeit.com</a></p>
                    <p>&nbsp;</p>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
