import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // TRANSFORMING AN OBJECT OF KEY/VALUE PAIRS (STATE) INTO AN ARRAY OF BURGER INGREDIENTS,
  // WHERE THE VALUE OF THE OBJECT IS IMPORTANT FOR US TO DECIDE HOW MANY INGREDIENTS WE NEED.
  // AND THE KEY IS IMPORTANT FOR US TO KNOW WHAT 'TYPE' OF INGREDIENT WE NEED.

  // The state ('ingredients') we're receiving from BurgerBuilder.js is an object, not an array.
  // So we can't use MAP - we can't just loop through that - because it's an object.
  // Instead, we have to transform this object into an array of the values of the ingredients.

  // So here in the 'burger' function (in the 'burger' component), we'll create a new constant ('transformedIngredients)
  // and use the 'Object' object (a default JavaScript object), which has a 'keys' method,
  // which extracts the keys of a given object, and turns that into an array - it gives you an array of the keys (so, in our case,
  // the keys are 'salad', 'bacon', 'cheese', and' 'meat' (see state in BurgerBuilder.js)).
  // The values (1, 1, 2, 2) are NOT part of the array.

  // So now after doing this, we have an array of strings - of keys.
  // And since 'keys()' returns us an array, now we can use MAP, so we'll chain .map() here.

  // Now, the elements in the array are simply our properties ('salad', 'bacon', etc.).
  // And we know MAP executes a function on each element in the input array.
  // So we'll give this argument we receive in the function the name 'igKey'.

  // And then in that function, we want to transform this string value into an array with as many elements
  // as we have ingredients for a given ingredient.
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
