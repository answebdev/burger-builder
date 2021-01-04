import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  // For testing - to see if removing Axios interceptors in 'withErrorHandler' works:
  // state = {
  //   show: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Layout>
              <Route path='/checkout' component={Checkout} />
              <Route path='/' exact component={BurgerBuilder} />
            </Layout>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
