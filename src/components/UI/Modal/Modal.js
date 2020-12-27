import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // We want to make sure that this Modal component only updates if 'show' changes;
    // this is the only thing that matters for us here.
    return nextProps.show !== this.props.show;
  }

  // Confirm if this works:
  componentDidUpdate() {
    console.log('[Modal] DidUpdate');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          // Use ternary to conditional change the CSS.
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
