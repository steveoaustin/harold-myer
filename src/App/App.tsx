import "./App.scss";

import React, { Component } from "react";
import { Route, Switch } from "react-router";

import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import AirConditioning from "./Components/Pages/Services/AirConditioning/AirConditioning";
import Contact from "./Components/Pages/Contact/Contact";
import FB from "../Media/graphics/fbShare.png";
import Footer from "./Components/Footer/Footer";
import FuelOil from "./Components/Pages/Services/FuelOil/FuelOil";
import Helmet from "react-helmet";
import Home from "./Components/Pages/Home/Home";
import Installation from "./Components/Pages/Services/Installation/Installation";
import NavBar from "./Components/NavBar/NavBar";
import Payment from "./Components/Pages/Payment/Payment";
import ScrollToTop from "./Components/Tools/ScrollToTop";
import Services from "./Components/Pages/Services/Services";
import Testimonials from "./Components/Pages/Testimonials/Testimonials";

require("es6-object-assign/auto");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta property="og:title" content="Harold Myers Inc." />
          <meta property="og:image" content={FB} />
        </Helmet>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/services" component={Services} />
            <Route
              exact
              path="/services/airConditioning"
              component={AirConditioning}
            />
            <Route exact path="/services/fuelOil" component={FuelOil} />
            <Route
              exact
              path="/services/installation"
              component={Installation}
            />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/contactUs" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default App;
