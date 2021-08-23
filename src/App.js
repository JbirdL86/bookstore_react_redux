import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './components/homepage';
// eslint-disable-next-line react/prefer-stateless-function
export default App = () => {
        const status = this.state;
        return (
          <Router>
            <div className="hello">
              <h1>hello world</h1>
              <h1>{status.data}</h1>
            </div>
            <div className="switch">
              <div className="switch_header">
                <ul className="nav-bar">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                </ul>
              </div>
              <Switch>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/store">
                  <Store />
                </Route>
                <Route path="/shop">
                  <ShoppingCart />
                </Route>
              </Switch>
            </div>
          </Router>
        );
      
}
