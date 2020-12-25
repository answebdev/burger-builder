import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// Array with which to loop through and build all our build controls and render them
// (of course, we could also just hard code all the controls, but having this array is more convenient):
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* Show price of the burger.
    The price is calculated in the BurgerBuilder container.
    Add 'toFixed(2)' so that the number is fixed to 2 decimal places. */}
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>

    {/* Loop through all the controls and render a build control for each of them,
    using the constant ('controls') created above.
    Remember too since we're using MAP, we need a key */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        // We also need to keep track of which TYPE this <BuildControl /> has. We could do:
        // type={ctrl.type}
        // ...but this is an unnecessary extra loop.
        // Instead, we can set up an ES6 function, execute 'props.ingredientAdded',
        // and there, simply pass back 'ctrl.type'.

        // And now, in order for this to work, this 'added' property needs to be connected to the MORE button (in BuildControl.js);
        // so on that MORE button, we'll add an 'onClick' listener,
        // and in there, we access 'props.added' (see BuildControl.js).
        added={() => props.ingredientAdded(ctrl.type)}
        // Add a property ('removed' to remove ingredients); follow same logic as for adding ingredients (see previous line).
        // Then, hook up this 'removed' property to the LESS button in BuildControl.js.
        removed={() => props.ingredientRemoved(ctrl.type)}
        // Set a 'disabled' property:
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
