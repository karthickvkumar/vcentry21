import React, { Component } from 'react';
import {Switch, Route, NavLink} from "react-router-dom";

import DraftPage from "./mail-box/draft";
import InboxPage from "./mail-box/inbox";
import StarredPage from "./mail-box/starred";
import TrashPage from "./mail-box/trash";

class Mail extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>
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
              <Route path="/mail/trash" component={TrashPage}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Mail;