import React, { Component } from "react";
import { Switch, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/Tools/ScrollToTop";
import Home from "./Components/Pages/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Services from "./Components/Pages/Services/Services";
import Payment from "./Components/Pages/Payment/Payment";
import Testimonials from "./Components/Pages/Testimonials/Testimonials";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AirConditioning from "./Components/Pages/Services/AirConditioning/AirConditioning";
import FuelOil from "./Components/Pages/Services/FuelOil/FuelOil";
import Installation from "./Components/Pages/Services/Installation/Installation";

import "./App.scss";

require("@babel/polyfill");
require("es6-object-assign/auto");

class App extends Component {
  render() {
    return (
      <div className="App">
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
