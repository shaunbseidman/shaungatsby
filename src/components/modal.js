import React from "react";
import PropTypes from "prop-types";
import './modal.scss'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <div class="content"></div>
        <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              <h5>CLOSE</h5>
            </button>
            {this.props.children}
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};