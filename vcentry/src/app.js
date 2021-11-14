import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

import "./css/style.css"; 

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/contact-us" component={ContactPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;