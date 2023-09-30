import './App.scss';

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router';

import FB from '../Media/graphics/fbShare.png';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Payment from './Components/Pages/Payment/Payment';
import AirConditioning from './Components/Pages/Services/AirConditioning/AirConditioning';
import FuelOil from './Components/Pages/Services/FuelOil/FuelOil';
import Installation from './Components/Pages/Services/Installation/Installation';
import Services from './Components/Pages/Services/Services';
import Testimonials from './Components/Pages/Testimonials/Testimonials';
import ScrollToTop from './Components/Tools/ScrollToTop';

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
