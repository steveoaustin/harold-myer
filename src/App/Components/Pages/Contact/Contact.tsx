import "./Contact.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";

import { Icon } from "@material-ui/core";

import homebase from "../../../../Media/Images/Compressed/homebase.jpg";

const sanityClient = require("@sanity/client");

class Contact extends Component {
  state: {
    phoneParsed: string;
    phone: string;
    email: string;
    fax: string;
    address: string;
    hours: string;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = {
      phoneParsed: "",
      phone: "",
      email: "",
      fax: "",
      address: "",
      hours: ""
    };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(
        `*[_type == "companyInfo"]{phoneNumber, address, emailAddress, faxNumber, hours}[0]`
      )
      .then((result: any) => {
        this.setState({
          phoneParsed: result.phoneNumber.replace(/\D/g, ""),
          phone: result.phoneNumber,
          email: result.emailAddress,
          fax: result.faxNumber,
          address: result.address,
          hours: result.hours
        });
      });
  }

  render() {
    return (
      <div id="contact">
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="All the information you need to find us and get in contact"
          />
        </Helmet>
        <div
          id="contact-image"
          style={{
            backgroundImage: `url(${homebase})`
          }}
        >
          <div id="contact-header">Contact Us</div>
        </div>
        <div id="contact-info">
          <div id="contact-infoHeader">Contact Information</div>
          <a
            href={`tel:${this.state.phoneParsed}`}
            className="contact-infoItem"
          >
            <Icon className="contact-infoIcon">phone</Icon>
            {this.state.phone}
          </a>
          <div className="contact-infoItem">
            <Icon className="contact-infoIcon">print</Icon>
            {this.state.fax}
          </div>
          <a href={`mailto:${this.state.email}`} className="contact-infoItem">
            <Icon className="contact-infoIcon">email</Icon>
            {this.state.email}
          </a>
          <a
            href="https://maps.app.goo.gl/N6cMsNZoCzVK8FdV7"
            className="contact-infoItem"
          >
            <Icon className="contact-infoIcon">place</Icon>
            {this.state.address}
          </a>
          <div className="contact-infoItem">
            Our hours are {this.state.hours}
          </div>
        </div>
        <iframe
          title="contact-map"
          id="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.839851768723!2d-75.14525708460492!3d40.39024187936805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4035a1dac07c3%3A0xda76e3444a86acb0!2sHarold+Myers+Fuel!5e0!3m2!1sen!2sus!4v1559159232705!5m2!1sen!2sus"
        />
      </div>
    );
  }
}

export default Contact;
