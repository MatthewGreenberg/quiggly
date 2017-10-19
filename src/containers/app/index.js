import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import './app.css';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header className='header'>
          <h1 className='header__header'>Quiggly</h1>
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
