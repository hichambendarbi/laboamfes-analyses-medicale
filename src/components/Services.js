import React from "react";

import styled from "styled-components";


import { Urgence,RDV,PRD } from "../assets";


const Text = styled.p`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;


const Section = styled.section`
  padding: 30px 0 225px;
  margin-Bottom:0px;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  line-height: normal;
  color: balck;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: black;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 3px gray;
  background-color: transparent;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: gray;
`;


const Services = () => {
  const width = window.innerWidth;
  return (
    <Section id="services" style={{marginBottom:"-100px"}}>
      <div className="container">
        <SectionTitle>Nos services</SectionTitle>
        <SubTitle>Essayez de tester nos services</SubTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
            <IconWrap>
              <Urgence with="80px" height="80px" fill="gray" />
              </IconWrap>
              <BoxTitle>Urgence</BoxTitle>
              <Text>
              Si Vous Avez des analyses Urgent. N'hesitez pas de Nous appeler sur +212 637 521-701
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
              <RDV with="80px" height="80px" fill="gray" />
              </IconWrap>
              <BoxTitle>Rendez-Vous</BoxTitle>
              <Text>
              Vous pouvez prendre un rendez-Vous 24h/7j en parlant avec Nous sur Whatsap +212 637 521-701
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
              <PRD with="80px" height="80px" fill="gray" />
              </IconWrap>
              <BoxTitle>Prelevement a domicile</BoxTitle>
              <Text>
              Le laboratoire adopte un systeme de prelevent a domicile 24/24h 7/7j sur +212 637 521-701
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
