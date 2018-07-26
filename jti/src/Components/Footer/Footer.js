import React, { Component } from "react";
import { Link } from "react-router-dom";
import PAYMENTS from "../../Assets/images/footer-payment-icons.png";
import RANCOM from "../../Assets/images/rancom.png";
import {
  BrowserView,
  isBrowser
} from "react-device-detect";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container c12 py-2">
          <div className="row text-white justify-content-between">
            <span>+61-280734453 | SUPPORT@TRADEFRED.COM.AU</span>
            <span>
              COPYRIGHT @ 2016 TRADEFRED ALL RIGHTS RESERVED POWERED BY{" "}
            </span>
          </div>
          <div className="text-center my-4">
            <img src={PAYMENTS} alt="payments" />
          </div>
          <div className="legal-information text-center text-white">
            <h4>LEGAL INFORMATION </h4>
            <p>
              Risk Warning: Trading forex, cryptocurrencies, indices, and
              commodities are potentially high risk and may not be suitable for
              all investors. The high level of leverage can work both for and
              against traders. Before any investment in forex, cryptocurrencies,
              indices, and commodities you need to carefully consider your
              targets, previous experience, and risk level. Trading may result
              in the loss of your money, therefore, you should not invest
              capital that you cannot afford to lose
            </p>
            <p>
            Disclaimer: Trading foreign exchange on margin carries high potential rewards but also high potential risks that may not be suitable for all investors. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience and risk appetite. Past performance is not indicative of future results, which can vary due to market volatility. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts. Any opinions, news, research, analyses, prices or other information contained on this website or linked to from this website are provided as general market commentary and do not constitute investment advice. Just Trade It (JTI) does not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. Any contents copied from Justradeit.com without permission violates our registered IL Copyright law, hence legal action should be taken. There are a lot of countries where rules of forex trading are different from other countries, Our service is not for people of any particular country, rather it is worldwide. We are not responsible for violation of any rule of a particular country by any resident of that country. 
Just Trade It is not a trading company,we are not holding 
 client money  we don't have any licence of Investment advice or money management licence in any country We are not investment advisers and we are not advice in trading 
            </p>
          </div>
          <BrowserView device={isBrowser}>
            <div className="foot_menu">
              <ul className="main_menu justify-content-center">
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/">SIGNALS TRADING</Link>
                </li>
                <li>
                  <Link to="">FOREX ZONE</Link>
                </li>
                <li>
                  <Link to="">MANAGMENT</Link>
                </li>
                <li>
                  <Link to="">ALGO TRADE</Link>
                </li>
                <li>
                  <Link to="">RESOURCES</Link>
                </li>
                <li>
                  <Link to="">CONTACT</Link>
                </li>
                <li>
                  <Link to="">LOGIN</Link>
                </li>
              </ul>
            </div>
          </BrowserView>
        </div>
        <div className="rancom text-center">
          <img src={RANCOM} alt="rancom" />
        </div>
      </footer>
    );
  }
}

export default Footer;
