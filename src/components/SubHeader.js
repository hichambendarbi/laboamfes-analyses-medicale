import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import {Link} from 'react-router-dom'
//import icon header

import {Login, Tele, Location  } from "../assets";

const BoxHeader1 = styled.div`
  width: 100%;
  font-size: 15px;
  background-color: transparent;
  height: 50px;
  color: white;
  font-weight: 900;
  @media (max-width: 853px) {
    height: 50px;
    font-size: 10px;
  }
  @media (max-width: 660px) {
    height: 50px;
    font-size: 7px;
  }
  @media (max-width: 300px) {
    height: 50px;
    font-size: 10px;
  }
`;

const Flex1 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 11px;
  justify-content: center;
  justify-content: flex-start;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;
const BoxNameLabo = styled.div`
  margin-right: 35px;
  color:gray;

  @media (max-width: 1025px) {
    margin-right: 100px;
  }
  @media (max-width: 560px) {
    font-size: 15px;
    margin-right: 30px;
    display: none;
  }
  @media (max-width: 400px) {
    margin-right: 0px;
    display: none;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;


const TeleHide = styled.span`
color:gray;
  @media (max-width: 960px) {
    font-size: 10px;
  }
  @media (max-width: 560px) {
    font-size: 5px;
  }
  @media (max-width: 370px) {
    display: none;
  }
`;


const SubHeader = () => ( 
    <Flex style={{ width: "100%" }}>
      <BoxHeader1>
        <Flex1 row>
        <Link to="/">
          <BoxNameLabo>Laboratoire Fes des Analyses Médicales</BoxNameLabo>
       </Link>
          <Box>
            <Tele height="25" width="40" />
            <TeleHide> +212 521-22-11-11</TeleHide>
          </Box>
          <Box>
            <Location height="25" width="40" />
            <TeleHide> Bd Biranzarane, lot 8, Res Nour,Bureau Nº11 Atlas-Fes</TeleHide>
          </Box>
          <Box>
            <a href="./member">
              <Login height="25" width="40" />
              <TeleHide style={{color:"#F5C118"}}> Se connecter</TeleHide>
            </a>
          </Box>
        </Flex1>
      </BoxHeader1>
    </Flex>

);

export default SubHeader;