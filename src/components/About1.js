import React from "react";
import styled from "styled-components";
import { Box } from "../reFlexing";
import "./StyleAbout/style.css";
import { Resultat, Profesionnel, Connect,Materials } from "../assets";


const Box2 = styled.div`
  margin-top: -100px;
`;

const SpanIcon = styled.div`
  margin-bottom: 17px;
  display: inline-block;
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: #f0f4f6;
  display: inline-block;
  line-height: 50px;
  -webkit-transition: 1s;
  transition: 1s;

  @media (max-width: 576px) {
    margin-bottom: 25px;
  };
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    margin-bottom: 15px;
  };
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 15px;
  }
`

const TitleCards=styled.h4`
font-weight: 600;
font-size: 20px;
margin-bottom: 20px;
position: absolute;
top: 55px;
left: 110px;
color:black;
font-family: "Playfair Display", serif;

@media (max-width: 576px) {
    margin-bottom: 15px;
    top: 38px;
    left: 85px;
  };

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    top: 41px;
    left: 85px;
  };

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 15px;
    top: 32px;
    left: 96px;
  }
`

const Parag = styled.p`
color: #666666;
font-family: "Roboto", sans-serif;
line-height: 1.929;
font-size: 14px;
margin-bottom: 0px;
color: #888888;
`

const ParagCards = styled.p`
color: #7f7f7f;
line-height: 1.8;
font-size: 15px;
`

const BoxPart = styled.div`
padding: 42px 30px 37px;
border: 1px solid #e4e6ea;
-webkit-transition: 1s;
transition: 1s;
position: relative;

@media (max-width: 576px){
    padding: 25px 10px;
    margin-top: 25px;
};

@media only screen and (min-width: 576px) and (max-width: 767px) {
    padding: 30px 15px;
    margin-top: 25px;
};

@media only screen and (min-width: 768px) and (max-width: 991px){
    padding: 30px 25px;
    margin-top: 25px;
};

@media only screen and (min-width: 992px) and (max-width: 1200px){
    margin-top: 25px;
};

@media (max-width: 991px){
    padding-top: 45px;
};

@media only screen and (min-width: 992px) and (max-width: 1200px){
    padding-top: 55px;
}
`

const BoxSingle = styled.div`
margin-bottom: 30px;
@media (max-width: 991px){
    margin-bottom: 0;
};
@media only screen and (min-width: 992px) and (max-width: 1200px){
    margin-bottom: 0;
}
`

const WhyUS = () => (
    <Box className="col-xl-4 col-md-4 align-self-center">
      <Box className="single_feature_text ">
        <h2>Pourquoi le laboratoire Fes ?</h2>
        <Parag>
        La mission de Laboratoire Fes est de contribuer pleinement à votre prise en charge, 
        en proposant, au-delà des résultats d’examens, notre expertise en biologie médicale.
        En complément de l’examen clinique, les résultats de biologie médicale apportent souvent un éclairage déterminant, 
        pour la prise de décision des prescripteurs. Les biologistes médicaux de Laboratoire Fes participent, ainsi, 
        activement à la prédiction, à la prévention et au dépistage des pathologies, ainsi qu’à leur traitement 
        mais aussi au suivi de l’état de santé des patients.
        Consciente de l’importance de la biologie médicale dans les soins prodigués à ses patients, 
        l’équipe Laboratoire Fes est impliquée au quotidien dans une démarche d’excellence, 
        se traduisant par notre engagement dans un processus qualité en vue du maintien de l’accréditation 
        et sur le plan technique et médical et par la présence d’un réseau d’experts. Pour satisfaire à ces exigences, 
        Laboratoire Fes ne cesse d’évoluer par l’utilisation de technologies innovantes 
        et s’adapte en permanence aux nouvelles avancées scientifiques.
        </Parag>
        
      </Box>
    </Box>
  );
  
  const Cards = ({ icon, title, text }) => (
    <Box className="col-lg-6 col-sm-6">
      <BoxSingle className="single_feature">
        <BoxPart className="single_feature_part">
          <SpanIcon >
            {icon}
          </SpanIcon>
          <TitleCards>{title}</TitleCards>
          <ParagCards>{text}</ParagCards>
        </BoxPart>
      </BoxSingle>
    </Box>
  );
  
  const OurEquipement = () => (
    <Cards
      title="Nos Equipements"
      text="Notre Groupe est engagé dans une démarche Qualité depuis sa création, en apportant un materiel de proximité et de haute performance."
      icon={<Materials width="35px" height="35px" fill="green" />}
    />
  );
  
  const OurProfessionals = () => (
    <Cards
      title="Professionelles"
      text="Un espace medecins professionnels de santé assure la suivi des examens des patients avec un rapport service de haute qualite et performance."
      icon={<Profesionnel width="35px" height="35px" fill="green" />}
    />
  );
  
  const OurReports = () => (
    <Cards
      title="Nos resultats"
      text="Un serveur des résultats de laboratoire Fes est toujours marche pour bien vos servir vos demandes des resultas en toute securite et rapidite."
      icon={<Resultat width="35px" height="35px" fill="green" />}
    />
  );
  
  const OurPartners = () => (
    <Cards
      title="Nos partenariats"
      text="Notre démarche developement, unique au sein du monde de sante, vise à faire des collaborations avec les professionnels de santé."
      icon={<Connect width="35px" height="35px" fill="green" />}
    />
  );

const About1 = () => {
    return (
        <Box2 id="about1" className="feature_part padding_top">
      <Box className="container">
        <div className="row">
          <WhyUS />
          <Box className="col-lg-8 col-md-8">
            <Box className="feature_item">
              <div className="row">
                <OurEquipement />
                <OurProfessionals />
                <OurReports />
                <OurPartners />
              </div>
            </Box>
          </Box>
        </div>
      </Box>
    </Box2>
    )
}

export default About1
