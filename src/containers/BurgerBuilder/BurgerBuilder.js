import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  // A modern alternative for adding state:
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    // To add an ingredient, we first need to know what the old ingredient count is:
    const oldCount = this.state.ingredients[type];

    // Calculate the updated count:
    const updatedCount = oldCount + 1;

    // Update the ingredients (state should be updated in an immutable way, so: create a new object,
    // and use the spread operator to distribute the properties of the old ingredients state into this new object):
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    // Take updated ingredients object, access the 'type' for which we have to update the ingredients,
    // and set the count (the value) - which is just the amount of the ingredients - equal to 'updatedCount':
    updatedIngredients[type] = updatedCount;

    // Call 'this.setState' to update the ingredients in our state.
    // Update the total price - we need to have a mapping of which ingredient costs what (so let's create a constant, INGREDIENT_PRICES - see above - which will be an object).
    // So, update the total price with the type for the price we added up above in the INGREDIENT_PRICES object.
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />

        {/* Pass a property ('ingredientAdded') that holds a reference to 'addIngredientHandler' so we can hook this up to <BuildControl /> in BuildControls.js: */}
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
