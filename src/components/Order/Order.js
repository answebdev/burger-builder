import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  const ingredients = [];

  // We need to convert the ingredients, which is an object, into an array.
  // We can either do that here, or in 'Orders.js'.
  // We'll do it here:
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #cccccc',
          padding: '5px',
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        {/* '.toFixed' will only work on a number, and by default, 'props.price' is a string,
        so we can simply call 'Number.parseFloat', which converts a string to a number, OR
        add a plus sign at the time of passing the prop in 'Orders.js' (in this case, we'll add the '+' in 'Orders.js'): price={+order.price} */}
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
