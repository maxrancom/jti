import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SideContact from './Components/Header/SideContact';
import './Assets/css/main.min.css';
import './Assets/js/myjs.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/homepage';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import SignalsTrading from './Components/Pages/SignalsTrading';
import ForexZone from './Components/Pages/ForexZone';
import AlgoTrade from './Components/Pages/AlgoTrade';
import Managment from './Components/Pages/Managment';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import { BrowserView } from "react-device-detect";




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
    

        <Route path={/^(?!.*register)(?!.*login).*$/} component={Header}/>
      
    
       <BrowserView>
        <Route path={/^(?!.*register)(?!.*login).*$/} component={SideContact}/>
       </BrowserView>

      
         <Route exact  path="/" component={Homepage}/>
         <Route exact  path='/about' component={About}/>
         <Route exact  path='/contact' component={Contact}/>
         <Route exact  path='/trading' component={SignalsTrading}/>
         <Route exact  path='/forexzone' component={ForexZone}/>
         <Route exact  path='/algotrading' component={AlgoTrade}/>
         <Route exact  path='/managment' component={Managment}/>
         <Route exact  path='/resources' component={AlgoTrade}/>
         <Route exact  path='/register' component={Register}/>
         <Route exact  path='/login' component={Login}/>
        <Route exact path={/^(?!.*register)(?!.*login).*$/} component={Footer}/>
   
        </div>
      </Router>
    );
  }
}

export default App;
