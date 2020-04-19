import React from 'react'
import styled from 'styled-components'
import "./styleCards.css"

const CareStyle = styled.div`

 
  max-width: 100%;
  text-align:center;

`
const Cards = ({title,text,img}) => {
    return (
  <CareStyle className="col-md-6 col-lg-4 mb-4 mb-lg-5">
    <a href="service-single.html" className="block__16443 text-center d-block">
     <span className="custom-icon mx-auto"><span className="icon-magnet d-block">{img}</span></span>
      <h3 style={{textAlign:"center"}}>{title}</h3>
      <p className="d-sm-block">{text}</p>
    </a>
  </CareStyle>


    )
}

export default Cards
