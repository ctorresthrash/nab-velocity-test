import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

class NabVelocity extends Component {

  processPayment = (response) =>{
    alert(response.toString(2));
  }

  componentDidMount(){
    window.callback_function = this.processPayment;
  }

  render() {
    return (
      <div>
        <Helmet>          
          <script
            src="https://api.cert.nabcommerce.com/1.3/button.js"
            type="text/javascript"
          />
        </Helmet>
        <button
          className="velocity-button"
          data-terminal-profile-id="3446"
          data-amount="12.00"
          data-invoice-num="12345"
          data-description="Tshirt">
          Pay Now
        </button>
      </div>
    );
  }
}

NabVelocity.propTypes = {
  fill: PropTypes.bool
};

export default NabVelocity;
