import React from "react"
import styled from 'styled-components'


const Parag = styled.p`
    margin-top: 0;
	margin-bottom: 1rem;
	display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
	margin-inline-end: 0px;
`
const HeaderBoxContact = styled.div`
text-align: center;
color :rgba(0, 0, 0, 0.5);
margin-right: 20px;
margin-left: 10px;
@media (max-width: 992px) {
	margin-right: 0px;
	margin-left: 0px;
	padding:10px;
  }
`

const PageIntro = ({text}) =>(
            <HeaderBoxContact>
			<Parag>{text}</Parag>
			</HeaderBoxContact>

)
export default PageIntro