import React, { Component } from "react";
import prepay from "../../../../Media/graphics/prepay.svg";
import budgetPlan from "../../../../Media/graphics/budgetPlan.svg";
import capPrice from "../../../../Media/graphics/capPrice.svg";

import "./Payment.scss";

class Payment extends Component {
  render() {
    return (
      <div id="payment">
        <div id="payment-image">
          <div id="payment-header">Payment</div>
        </div>
        <div id="payment-text">
          We offer several different oil purchasing programs: fixed or cap price
          budget plans, prepay, and delivery based off of current pricing. All
          of these plans include automatic delivery.
          {
            <>
              <br />
              <br />
            </>
          }
          We take will-call deliveries in the case that you would prefer to
          pick-up your fuel.
          {
            <>
              <br />
              <br />
            </>
          }
          Visa, MasterCard, Discover and LIHEAP payments are accepted.
        </div>
        <div id="payment-options">
          <div className="payment-option">
            <img
              className="payment-optionImage"
              src={budgetPlan}
              alt="budget plans"
            />
            <div className="payment-optionTitle">Budget Plans</div>
            <div className="payment-optionDescription">
              Your budget plans are set up in ten equal monthly payments. Every
              month you pay a set amount rather than larger payments solely
              throughout the winter. Please contact us to set up a budget plan
              customized to best match your fuel oil needs!
            </div>
          </div>
          <div className="payment-option">
            <img
              className="payment-optionImage"
              src={capPrice}
              alt="cap program"
            />
            <div className="payment-optionTitle">Cap Program</div>
            <div className="payment-optionDescription">
              Capping your heating oil price protects you from uncontrolled
              rising prices. Most importantly, it still allows you to benefit
              when prices decrease, since the cap price is not a fixed price,
              but rather a ceiling on the price of your fuel. The most you would
              pay per gallon is your set cap price. The cost of the cap program
              depends on your fuel oil usage.
            </div>
          </div>
          <div className="payment-option">
            <img
              className="payment-optionImage"
              src={prepay}
              alt="prepay plan"
            />
            <div className="payment-optionTitle">Prepay Plans</div>
            <div className="payment-optionDescription">
              Our fixed prepayment plan allows you to purchase some or all of
              your heating oil needs at a set price.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
