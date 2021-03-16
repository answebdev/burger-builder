import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // Implement a method to see when this component actually updates:
  // componentDidUpdate() {
  //   console.log('[OrderSummary] DidUpdate');
  // }

  render() {
    // We will get the 'ingredients' in an object format.
    // As in BurgerBuilder.js, use Object.keys to transform this into an array of keys (so, salad, cheese, etc.).
    // And as before, we want to MAP this into an array of JSX elements.
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            {/* Add inline style to capitalize the first letter: */}
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
