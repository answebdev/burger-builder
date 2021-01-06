import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'John Smith',
        address: {
          street: 'Smith Drive',
          zipCode: '12345',
          country: 'USA',
        },
        email: 'jsmith@test.com',
      },
      deliveryMethod: 'premium',
    };
    // // Send request to backend:
    axios
      // If you do not use an Axios instant, you can just use your entire Firebase endpoint here,
      // and just add '/orders/json' to the end (and then also just import Axios as normal up above):
      // .post(
      //   'https://react-burger-76228-default-rtdb.firebaseio.com/orders.json',
      //   order
      // )

      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype='input'
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <Input
          inputtype='input'
          type='email'
          name='email'
          placeholder='Your Email'
        />
        <Input
          inputtype='input'
          type='text'
          name='street'
          placeholder='Street'
        />
        <Input
          inputtype='input'
          type='text'
          name='postal'
          placeholder='Zip Code'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
