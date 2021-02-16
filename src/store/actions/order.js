// This file holds the action creators for submitting an order.
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// SYNCHRONOUS action creator.
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

// SYNCHRONOUS action creator.
export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

// ASYNC action creator.
export const purchaseBurgerStart = (orderData) => {
  return (dispatch) => {
    axios
      .post('/orders.json', orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
