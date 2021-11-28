import React, { Component } from 'react';
import {Switch, Route, NavLink} from "react-router-dom";

import DraftPage from "./mail-box/draft";
import InboxPage from "./mail-box/inbox";
import StarredPage from "./mail-box/starred";
import TrashPage from "./mail-box/trash";

class Mail extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchText : "",
      incommingMessage : ""
    }
  }

  onHandleInput = (event) => {
    this.setState({
      searchText : event.target.value
    })
  }

  onReceiveValue = (value) =>{
    console.log(value);
    this.setState({
      incommingMessage : value
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <span>{this.state.incommingMessage}</span>
          <input type="text" className="input-border" onChange={this.onHandleInput}/>
        </div>
        <div className="body">
          <div className="sidebar">
            <div className="button-space">
              <NavLink to="/mail/inbox" className="custom-button" activeClassName="active-button">Inbox</NavLink>
            </div>
            <div className="button-space">
              <NavLink to="/mail/starred" className="custom-button" activeClassName="active-button">Starred</NavLink>
            </div>
            <div className="button-space">
              <NavLink to="/mail/draft" className="custom-button" activeClassName="active-button">Draft</NavLink>
            </div>
            <div className="button-space">
              <NavLink to="/mail/trash" className="custom-button" activeClassName="active-button">Trash</NavLink>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route path="/mail/inbox" component={InboxPage}></Route>
              <Route path="/mail/starred" component={StarredPage}></Route>
              <Route path="/mail/draft" component={DraftPage}></Route>
              <Route path="/mail/trash" render={
                () => {
                  return(
                    <TrashPage inputData={this.state.searchText} 
                      inputFunction={this.onReceiveValue}
                    ></TrashPage>
                  )
                }
              }></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;