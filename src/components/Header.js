import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LinkRoute from "./common/LinkRoute";


import {
  NavbarBrand
} from "reactstrap";
import { Logo } from "../assets";

const Header = () => {
  
  const scrollTo = id => e => {
    e.preventDefault();
    console.log("id", id);
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id,
     
    });
  };
const HeaderRoute= <Navbar bg="none" expand="lg" fixed="top">
<Container >
{/*
  <Navbar.Brand
    href="/"
    onClick={scrollTo("about1")}
    aria-label="Logo"
  >
   </Navbar.Brand>
*/}
   <Navbar.Brand >
        <NavbarBrand href="/">  <Logo width="90px" height="60px" style={{marginTop:"5px"}} /> </NavbarBrand> 
   </Navbar.Brand>

 
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span />
    <span />
    <span />
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <LinkRoute tabs={[
      {text : "Acceuil"	, link: "/"}, 
    ]} />

      <LinkRoute tabs={[
      {text : "Professionnel"	, link: "/Professionnel"}, 
    ]} />

       
      <LinkRoute tabs={[
        {text: "Patient", link:"/Patient"}
      ]}
      />

<LinkRoute tabs={[
      {text : "Services"	, link: "/"}, 
    ]} />
       
      <LinkRoute tabs={[
      {text : "A propos"	, link: "/"}, 
    ]} />
      
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
const HeaderWithoutRoute = <Navbar bg="none" expand="lg" fixed="top">
<Container >
{/*
  <Navbar.Brand
    href="/"
    onClick={scrollTo("about1")}
    aria-label="Logo"
  >
   </Navbar.Brand>
*/}
   <Navbar.Brand >
        <NavbarBrand href="/">  <Logo width="90px" height="60px" style={{marginTop:"5px"}} /> </NavbarBrand> 
   </Navbar.Brand>

 
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span />
    <span />
    <span />
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <LinkRoute tabs={[
      {text : "Acceuil"	, link: "/"}, 
    ]} />

      <LinkRoute tabs={[
      {text : "Professionnel"	, link: "/Professionnel"}, 
    ]} />

       
      <LinkRoute tabs={[
        {text: "Patient", link:"/Patient"}
      ]}
      />
    <Link
       href="!#"
        className="nav-link"
        activeClass="active"
        to="services"
        spy={false}
        smooth={true}
        offset={0}
        duration={400}
        style={{color:"#A6D230",fontSize:"20px"}}
      >
        Services
      </Link>
 
      <Link
        href="#"
        className="nav-link"
        activeClass="active"
        to="about1"
        spy={false}
        smooth={true}
        offset={0}
        duration={400}
        style={{color:"#A6D230",fontSize:"20px"}}
      >
        A propos
      </Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

  const choiceHeader = () => {

    if(window.location.pathname==="/Professionnel" || window.location.pathname==="/Patient" )
    {
      return HeaderWithoutRoute 
    }
    else 
     return HeaderRoute 
  }

  return (
    <header>
      {choiceHeader()}
    </header>
  );
};

export default Header;
