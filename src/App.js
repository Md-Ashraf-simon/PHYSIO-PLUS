import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About Us/About";
import Contact from "./components/Contact Us/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Booking from "./components/Booking/Booking";
import Doctors from "./components/Doctors/Doctors";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivatRout from "./components/PrivateRoute/PrivatRout";

function App() {
  return (
    <div className="App">
   
   <AuthProvider>
     <Router>
        <Header />

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivatRout exact path="/doctors">
            <Doctors></Doctors>
          </PrivatRout>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivatRout exact path="/booking/:serviceId">
            <Booking></Booking>
          </PrivatRout>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>

      
    </div>
  );
}

export default App;
