import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
  // Render is a lifecylce method:
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
