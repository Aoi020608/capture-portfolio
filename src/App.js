import React from "react";
import { Switch, Route } from "react-router-dom";
//global style
import GlobalStyle from './component/GlobalStyle';
import Nav from './component/Nav';
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />Í
      </Route>
      </Switch>
    </div>
  );
}

export default App;
