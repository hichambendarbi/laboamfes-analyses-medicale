import React, { Component } from "react";
import { Container, Row, Col} from "reactstrap";
import "../APP.css";
import { Phone,MapPin, Mail } from "../assets";
import styled from "styled-components";

const Box = styled.div`
padding: 40px 0px;
background: #1C44BA;
color: rgba(0, 0, 0, 0.7);
`

const HeaderBoxContact = styled.div`
text-align: center;
color :rgba(0, 0, 0, 0.5);
`

const BoxSvg = styled.div`
text-align: center;
`

const TitleSvg = styled.p`
margin: 15px 0px;
`

const SvgCards = styled.div`
padding: 3px;
margin: 10px;
color: rgba(255, 255, 255, 0.7);
`

const InputMsg = styled.input`
@media (min-width: 284px) {
    width: 100%;
    margin: 5px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
  }
`

const TxtMsg = styled.textarea`
@media (min-width: 284px) {
  margin: 5px;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  }
`

const BtnMsg = styled.button`
@media (max-width: 484px) {
 margin-left:90px;
}
@media (max-width: 375px) {
  margin-left:75px;
 }
@media (max-width: 360px) {
  margin-left:70px;
 }
@media (max-width: 330px) {
  margin-left:50px;
}
`



class Contact extends Component {
  render() {
    return (
      <Box className="subComponent-lg" id="contactBody">
        <Container>
          <HeaderBoxContact className="headerTitle text-center">
            <h1>Contactez-Nous</h1>
            <p>Laboamfes a votre disposition</p>
          </HeaderBoxContact>
          <BoxSvg className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <SvgCards className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <TitleSvg>+212 637 521-701</TitleSvg>
                </SvgCards>
              </Col>
              <Col lg="4" md="4">
                <SvgCards className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <TitleSvg>Bd Biranzarane, lot 8, Res Nour,Bureau Nº11 Atlas-Fes</TitleSvg>
                </SvgCards>
              </Col>
              <Col lg="4" md="4">
                <SvgCards className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <TitleSvg>Laboamfes@gmail.com</TitleSvg>
                </SvgCards>
              </Col>
            </Row>
          </BoxSvg>
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <InputMsg
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Nom et Prenom"
                    required
                  />
                  <br />
                  <InputMsg
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Votre email"
                    required
                  />
                </Col>
                <Col>
                  <TxtMsg
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Votre message"
                  />
                  <BtnMsg outline color="light" className="float-left" style={{border:"2px solid gray",width:"200px",height:"40px",borderRadius:"5px",backgroundColor:"transparent"}}>
                    Envoyer
                  </BtnMsg>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </Box>
    );
  }
}

export default Contact;