import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Mail from "./pages/mail";
import "./css/style.css"; 

import configureStore from "./redux/store/redux-store";
const reduxStore = configureStore();

class App extends Component{

  render(){
    return(
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/contact-us" component={ContactPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/mail" component={Mail}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;