import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// import axios from 'axios';
// Import our configured Axios instant:
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
  // A modern alternative for adding state:
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  // These state properties (purchasing, loading, error) are relevant to our UI state only (e.g. should
  // we display a modal, should we display an error message,...).
  // The other properties were moved from here and managed by the global Redux store.
  // Both of these types of state can co-exist like this together with Redux.
  // You can put everything into Redux, but you don't have to.
  state = {
    // Ingredients is coming from the Firebase database:
    // ingredients: null,
    // totalPrice: 4,
    // purchasable: false,
    // purchasing: false,
    // loading: false,
    // error: false,

    // After adding Redux (no longer using local state for ingredients):
    // totalPrice: 4,
    // purchasable: false,
    purchasing: false,
    // loading: false,
    // error: false,
  };

  // Fetch the data - send a request to Get the ingredients -
  // sent to Firebase backend:
  componentDidMount() {
    // console.log(this.props);
    this.props.onInitIngredients();
    // axios
    //   .get(
    //     'https://react-burger-76228-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
  }

  // Check ingredients we have in our state.
  // Create a new object 'ingredients' to create a new copy of our state (with the spread operator)
  updatePurchaseState(ingredients) {
    // Add up all the ingredients -
    // Turn our object (in previous line) into an array of values:
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        // This will be the amount, because with 'ingredients' and [igKey] ('igKey' is the value for a given key),
        // we're accessing a certain property in the 'ingredients' object; 'igKey' is salad, bacon,...so we are basically getting their values - the numbers (1, 1,...)/
        // And this is what we return for each key:
        return ingredients[igKey];
        // So now we have an array of values.
        // And now all we need to do is call REDUCE to reduce- this time, NOT to flatten the array,
        // but to turn it into a single number: the sum of all ingredients.
        // Note: 'sum' is the constantly updated current sum, up until the current iteration where this function is executed.
        // And once this function is executed on ALL array elements, 'sum' is the final result.
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  // REMOVED addIngredientHandler AFTER ADDING IN REDUX
  // addIngredientHandler = (type) => {
  //   // To add an ingredient, we first need to know what the old ingredient count is:
  //   const oldCount = this.state.ingredients[type];

  //   // Calculate the updated count:
  //   const updatedCount = oldCount + 1;

  //   // Update the ingredients (state should be updated in an immutable way, so: create a new object,
  //   // and use the spread operator to distribute the properties of the old ingredients state into this new object):
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   // Take updated ingredients object, access the 'type' for which we have to update the ingredients,
  //   // and set the count (the value) - which is just the amount of the ingredients - equal to 'updatedCount':
  //   updatedIngredients[type] = updatedCount;

  //   // Call 'this.setState' to update the ingredients in our state.
  //   // Update the total price - we need to have a mapping of which ingredient costs what (so let's create a constant, INGREDIENT_PRICES - see above - which will be an object).
  //   // So, update the total price with the type for the price we added up above in the INGREDIENT_PRICES object.
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // REMOVED removeIngredientHandler AFTER ADDING IN REDUX
  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];

  //   // Once we remove all the ingredients, we cannot go into negative numbers if we keep clicking the LESS button (i.e. we cannot have -1 bacon).
  //   // We will get an error if we try to do so, because we cannot create an array to render from a negative value.
  //   // So we need to check to see if we DO have ingredients to begin with.
  //   // So the 'oldCount' of a given ingredient should be greater than 0.
  //   // So if 'oldCount' is smaller or equal to 0, then we essentially want to RETURN, so that nothing happens,
  //   // if we try to remove an ingredient that we don't have.

  //   // It would even be better, of the the button became DISABLED - see down in RENDER method.
  //   if (oldCount <= 0) {
  //     return;
  //   }

  //   // Reduce the ingredient count by 1.
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };

  //   updatedIngredients[type] = updatedCount;

  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;

  //   // Deduct the price.
  //   const newPrice = oldPrice - priceDeduction;

  //   // Update the ingredients and the price.
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

  //   this.updatePurchaseState(updatedIngredients);
  // };

  // Do not use this syntax to create a function. You cannot use 'this' with this syntax (you'll get an error).
  // This syntax will not work correctly if the method is triggered through an event (and we have an 'onClick' event in BuildControls.js that triggers this).
  // Due to the way the 'this' keyword works in JavaScript, it will then NOT refer to the class...

  // purchaseHandler() {
  //   this.setState({ purchasing: true });
  // }

  // ...We must therefore use an arrow function, which basically contains the state, or context, of 'this':
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    // alert('You may continue...');

    // REMOVED AFTER ADDING IN REDUX:
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       '=' +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString,
    // });
    this.props.history.push('/checkout');
  };

  render() {
    // Disable button when ingredients become 0.
    // Copy the 'ingredients' object (state from above) in an immutable way, and disribute it using the spread operator.
    const disabledInfo = {
      // ...this.state.ingredients,

      // Redux code:
      ...this.props.ings,
    };
    // But this object alone is not all the information we want, though.
    // So loop through all the keys in 'disabledInfo', and check if this is 0 or less.
    // And we'll update the 'disabledInfo' key (so, salad, meat, etc.) with the information off that check,
    // so that the object will not have the shape of: salad, 0; meat, 0; etc.
    // ...but simply if it should be disabled or not. So: salad, true; meat: true, etc.
    // And 'true' will be the value that is assigned if it should be disabled.

    // And then, we can pass this 'disabledInfo' to the BuildControls component down below (see below).
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
      <p style={{ textAlign: 'center' }}>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    // if (this.state.ingredients) {
    // Redux code:
    if (this.props.ings) {
      burger = (
        <Aux>
          {/* <Burger ingredients={this.state.ingredients} />; */}
          {/* Redux: */}
          <Burger ingredients={this.props.ings} />;
          {/* Pass a property ('ingredientAdded') that holds a reference to 'addIngredientHandler' so we can hook this up to <BuildControl /> in BuildControls.js: */}
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }

    return (
      <Aux>
        {/* We want to add a property 'show' and use this to show the CSS animation in the Modal.module.css (transition).
        Then in Modal.js, we change the modal depending on the 'show' property (see Modal.js for inline styles / ternary --> 'transform: props.show', etc.). */}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
