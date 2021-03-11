import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componendDidMount() {
    this.props.onTryAutoSignup();
  }
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
              <Route path='/orders' component={Orders} />
              <Route path='/auth' component={Auth} />
              <Route path='/logout' component={Logout} />
              <Route path='/' exact component={BurgerBuilder} />
            </Layout>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
