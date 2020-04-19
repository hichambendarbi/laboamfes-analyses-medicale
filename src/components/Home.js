import React from "react";
import styled from "styled-components";
import { Whatsapp } from "../assets";
import bgImg from "../assets/img/ho.jpg";
import Services from "./Services";
import About1 from "./About1";
import {Link} from 'react-router-dom'

const Section = styled.section`
  position: relative;
  padding-top: 138px;
  padding-bottom: 288px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url(${bgImg});

  &:after,
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1px;
    border-bottom: 10px solid #fff;
    z-index: 2;
  }

  &:before {
    left: 0;
    border-right: 12px solid transparent;
    border-left: calc(50vw - 12px) solid #fff;
  }

  &:after {
    right: 0;
    border-left: 12px solid transparent;
    border-right: calc(50vw - 12px) solid #fff;
  }

  @media (min-width: 992px) {
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 279px;
    padding-bottom: 111px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

const BgOverlay = styled.div`
background-image: linear-gradient(122222deg,#30312e,rgba(0,0,0,0.14));
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(122222deg,#30312e,rgba(0,0,0,0.14));
  }
`;

const HomeTitle = styled.h1`
  font-weight: 400;
  text-align: center;
  color: #f7f7f8;
  font-size: 15px;
  line-height: 1.55;
margin-top:-60px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-weight: 500;
  font-size: 20px;
  margin-top:15px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #fffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;

const SubButton = styled.button`
  line-height: 1.83;
  text-align: center;
  background-color:transparent;
  border-radius:100px;
  border:2px solid gray;
  color:#f7f7f8;

  @media (max-width: 992px) {
    line-height: 1.83;
    text-align: center;
    background-color:transparent;
    border-radius:10px;
    border:2px solid green;
    color:#f7f7f8;
    width:170px;
    font-size:12px;
  }
`;
const Box = styled.div`
@media (max-width: 992px) {
margin-top:100px;
}
`

const Home = () => {
  return (
    <div>
    <Section id="home">
      <BgOverlay />
      <div className="container">
      <Box>
        <HomeTitle data-aos="zoom-in">
        Laboratoire Fes<br/> RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES
        </HomeTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
       <Link to="/Rendez-Vous-laboratoire-fes"><SubButton  >
          <Whatsapp height= {"30px"} width={"30px"} style={{margin:"10px"}}/>
          +212 637 521-701</SubButton></Link> 
        </SubTitle>
        </Box>
      </div>
    </Section>
    <Services />
        <About1 />
    
    </div>
  );
};

export default Home;
