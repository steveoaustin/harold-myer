import "./Payment.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";

import budgetPlan from "../../../../Media/graphics/budgetPlans.png";
import prepay from "../../../../Media/graphics/prepay.png";
import payment from "../../../../Media/Images/Compressed/payment.jpg";
import Separator from "../../Separator/Separator";

//import capPrice from "../../../../Media/graphics/capPrice.svg";

const sanityClient = require("@sanity/client");

class Payment extends Component {
  state: {
    prepayFile: any;
    showPrepay: boolean;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = { prepayFile: undefined, showPrepay: false };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(`*[_type == "prepayForm"]{"fileUrl" : form.asset->url}[0]`)
      .then((result: any) => {
        this.setState({ prepayFile: result.fileUrl });
      });
    this.client
      .fetch(
        `*[_type == "fuelList"]{currentOptions[]{fuelName, fuelPrice, fuelInfo}}[0]`
      )
      .then((result: any) => {
        result.currentOptions.map((fuel: any) => {
          // show prepay link when in fuel list
          if (fuel.fuelName.toLowerCase().includes("prepay")) {
            this.setState({ showPrepay: true });
          }
          return null;
        });
      });
  }

  render() {
    return (
      <div id="payment">
        <Helmet>
          <title>Payment Options</title>
          <meta
            name="description"
            content="We offer several payment options to accommodate your budget for purchasing fuel at an affordable price"
          />
        </Helmet>
        <div id="payment-image" style={{ backgroundImage: `url(${payment})` }}>
          <div id="payment-header">Payment</div>
        </div>
        <div id="payment-text">
          We offer several different oil purchasing programs: budget, prepay,
          and delivery based off of current pricing. All of these plans include
          automatic delivery.
          {
            <>
              <br />
              <br />
            </>
          }
          If you prefer to order your own oil as needed, we offer prompt
          delivery.
          {
            <>
              <br />
              <br />
            </>
          }
          AutoPay is available for credit and debit card users.
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
            <Separator />
          </div>

          {/* <div className="payment-option">
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
            <Separator />
          </div> */}

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
            {this.state.prepayFile !== undefined && this.state.showPrepay && (
              <a
                id="payment-prepayFormDownload"
                href={this.state.prepayFile}
                download="Prepay_Form"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Prepay Form
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
