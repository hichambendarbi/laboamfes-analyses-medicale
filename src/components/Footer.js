import React from "react";
import { Facebook, Instagram, Twitter } from "../assets";
import "./style.css";
import styled from 'styled-components'
import {Link} from "react-router-dom"
const BoxFooter = styled.div`
padding: 7em 0;
position: relative; 
font-size: 16px;
background: #1b1919;
padding: 7em 0;
z-index: 0;
width:100%;
position: relative;

@media (max-width: 767.98px) 
 { padding: 6em 0; }
`
const Box = styled.div`

`
const Title = styled.h2`
`

const Footer = () => (
  <BoxFooter className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5" style={{textAlign:"center"}}>
        <div className="col-md">
          <Box className="ftco-footer-widget mb-4">
            <Title className="ftco-heading-2 logo"
             style={{color: "#fff",marginBottom: "40px",fontWeight: "600"}}>
              <span >Acredité</span> par l'état
            </Title>
            <p>Description d'acredité.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <a href="https://FacebookLABOFES">
                <Facebook height="30" width="60" fill="white" />
              </a>

              <a href="https://TwitterLABOFES">
                <Twitter height="30" width="60" fill="white" />
              </a>

              <a href="https://InstagramLABOFES">
                <Instagram height="30" width="60" fill="white" />
              </a>
            </ul>
          </Box>
        </div>
        <div className="col-md">
          <Box className="ftco-footer-widget mb-4 ml-md-5">
            <Title className="ftco-heading-2"
             style={{color: "#fff",marginBottom: "40px",fontWeight: "600"}}>Laboamfes</Title>
            <ul className="list-unstyled">
              <li>
              <Link to="/Signup">Creér un compte</Link>
              </li>
              <li>
              <Link to="/member">Se connecter</Link>
              </li>
            </ul>
          </Box>
        </div>

        <div className="col-md">
          <Box className="ftco-footer-widget mb-4">
            <Title className="ftco-heading-2"
             style={{color: "#fff",marginBottom: "40px",fontWeight:"600"}}
            >Service Horaires</Title>
            <div className="opening-hours">
              <p>
                De lundi a Samedi : <span className="mb-3">07:30 a 17:30</span>
              </p>
              <p>
                Urgence Service : <span className="mb-3">+212 637-52-17-01</span>
              </p>
            </div>
          </Box>
        </div>
      </div>
      <div style={{marginBottom:"-100px",marginTop:"-10px"}}>
        <div >
          <p style={{textAlign:"center"}}>
            <i aria-hidden="true" /> 
            Copyright &copy;{" "}2019{" "}<br />
            <a href="https://ittyni.com">{"ittyni "}</a>
          </p>
        </div>
      </div>
    </div>
  </BoxFooter>
);

export default Footer;
