import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SubHeader from "./components/SubHeader";
import Professionnel from "./components/Professionnel"
import Patient from "./components/Patient"
import RendezV from "./components/RendezV"
import Footer from "./components/Footer"


import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
    let navElement = $("nav");
    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Router>
    <Fragment>
     <SubHeader/>
     <Header/>
     <main>
        <Route exact path="/" component={Home}/>
     
        <Switch>
        
        <Route path="/Professionnel" component={Professionnel}/> 
        <Route path="/Patient" component={Patient}/> 
        <Route path="/Rendez-Vous-laboratoire-fes" component={RendezV}/> 
        </Switch>
      </main>
      <Contact/>
      <Footer/>
    </Fragment>
    </Router>
  );
};

export default App;
