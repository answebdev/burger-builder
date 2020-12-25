import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  // We will get the 'ingredients' in an object format.
  // As in BurgerBuilder.js, use Object.keys to transform this into an array of keys (so, salad, cheese, etc.).
  // And as before, we want to MAP this into an array of JSX elements.
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        {/* Add inline style to capitalize the first letter: */}
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
