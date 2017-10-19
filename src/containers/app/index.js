import React from 'react';
import { Route, NavLink, withRouter, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import Home from '../home'
import About from '../about'
import './app.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className='header'>
          <Link
            className='header__header'
            to='/home'
          >
            Quiggly
          </Link>
          <div className='header__wrapper'>
            <NavLink
              to="/home"
              className='header__link'
              activeClassName='active'
            >
              Home
            </NavLink>
            <NavLink
              to='/about-us'
              className='header__link'
              activeClassName='active'
            >
              About
            </NavLink>
          </div>
        </header>
        <main className='main'>
          <Route
            exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/about-us"
            component={About}
           />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
