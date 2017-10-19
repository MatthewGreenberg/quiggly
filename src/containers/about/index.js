import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import './about.css';

import {
  increment,
  decrement,
  resetCount,
  toggleDrawer
} from '../../modules/about'
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';

class About extends React.Component {

  changeCounter = () => {
    if (this.props.count < 2) {
      this.props.increment();
    } else {
      this.props.resetCount();
    }
  }

  handleToggle = () => {
    this.props.toggleDrawer();
  }

  render(){
    const images = [image1, image2, image3];
    return (
      <div className='about'>
        <button
         label="Toggle Drawer"
         onClick={this.handleToggle}
       />
        <MuiThemeProvider>
          <Drawer open={this.props.isOpen}>
          </Drawer>
        </MuiThemeProvider>
        <h1 className='about__header'>About</h1>
        <p className='about__description'>You should click me!</p>
        <img
          className='about__image'
          src={images[this.props.count]}
          onClick={this.changeCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.about.count,
  isOpen: state.about.isOpen
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement,
  resetCount,
  toggleDrawer
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
