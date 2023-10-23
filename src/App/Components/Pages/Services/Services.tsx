import "./Services.scss";

import React, { Component } from "react";
import Helmet from "react-helmet";

import services from "../../../../Media/Images/Compressed/services.jpg";
import ServicesPanel from "../../ServicesPanel/ServicesPanel";

const sanityClient = require("@sanity/client");

class Services extends Component {
  state: {
    serviceContract: any;
  };
  client: any;

  constructor(props: any) {
    super(props);
    this.state = { serviceContract: undefined };
    this.client = sanityClient({
      projectId: "ts7lblsw",
      dataset: "cms-data",
      useCdn: true
    });
    this.client
      .fetch(
        `*[_type == "serviceContract"]{"fileUrl" : contract.asset->url}[0]`
      )
      .then((result: any) => {
        this.setState({ serviceContract: result.fileUrl });
      });
  }
  render() {
    return (
      <div id="services">
        <Helmet>
          <title>Our Services</title>
          <meta
            name="description"
            content="We deliver heating oil and other types of fuel, and offer installation for heating appliances air conditioners "
          />
        </Helmet>
        <div
          id="services-image"
          style={{ backgroundImage: `url(${services})` }}
        >
          <div id="services-header">Our Services</div>
        </div>
        <div id="services-overview">
          Harold Myers, Inc. provides 24-hour emergency heater service to all of
          our fuel oil customers. We also repair air conditioners.
          <br />
          <br />
          Our full time highly skilled technicians provide all of our service
          work. Our trucks and warehouse are stocked with a complete line of
          parts to fix all makes and models of oil fired heating equipment.
          Harold Myers, Inc. does heater, oil tank and air conditioner
          installations too.
          <br />
          <br />
          We are here to meet all of your home comfort needs!
          {this.state.serviceContract !== undefined && (
            <a
              id="services-serviceContractDownload"
              href={this.state.serviceContract}
              download="Service_Contract"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Our Service Contract
            </a>
          )}
        </div>
        <ServicesPanel />
        <div id="services-mapOverview">
          This is our general service area.
          {
            <>
              <br />
              <br />
            </>
          }
          Please contact us if you are close by to see if we can accommodate
          your needs:
          <div className="services-towns">
            <div className="services-town">Bedminster</div>
            <div className="services-town">Buckingham</div>
            <div className="services-town">Carversville</div>
            <div className="services-town">Chalfont</div>
            <div className="services-town">Doylestown</div>
            <div className="services-town">Dublin</div>
            <div className="services-town">Furlong</div>
            <div className="services-town">Hatfield</div>
            <div className="services-town">Hilltown</div>
            <div className="services-town">Horsham</div>
            <div className="services-town">Ivyland</div>
            <div className="services-town">Jamison</div>
            <div className="services-town">Kitnersville</div>
            <div className="services-town">New Britain</div>
            <div className="services-town">New Hope</div>
            <div className="services-town">Newton</div>
            <div className="services-town">Ottsville</div>
            <div className="services-town">Perkasie</div>
            <div className="services-town">Pipersville</div>
            <div className="services-town">Plumsteadville</div>
            <div className="services-town">Point Pleasant</div>
            <div className="services-town">Quakertown</div>
            <div className="services-town">Richboro</div>
            <div className="services-town">Richlandtown</div>
            <div className="services-town">Riegelsville</div>
            <div className="services-town">Sellersville</div>
            <div className="services-town">Solebury</div>
            <div className="services-town">Souderton</div>
            <div className="services-town">Southampton</div>
            <div className="services-town">Telford</div>
            <div className="services-town">Warminster</div>
            <div className="services-town">Warrington</div>
            <div className="services-town">Wrightstown</div>
            <div className="services-town">Wycombe</div>
          </div>
        </div>
        <div id="services-mapContainer">
          <iframe
            id="services-map"
            title="services-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.839851768723!2d-75.14525708460492!3d40.39024187936805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4035a1dac07c3%3A0xda76e3444a86acb0!2sHarold+Myers+Fuel!5e0!3m2!1sen!2sus!4v1559159232705!5m2!1sen!2sus"
          />
        </div>
      </div>
    );
  }
}

export default Services;
