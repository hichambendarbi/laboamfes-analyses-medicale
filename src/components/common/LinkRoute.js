import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBox = styled.div`
@media (max-width: 991px)
{
    padding: 15px 0;
    font-size: 18px;
    font-size: 1.28571rem;
    font-weight: 300;
}
`


const LinkRoute = ({tabs}) => (
        <NavBox>
              {tabs.map(tab=>
                <Link className="nav-link" activeClass="active"
                to={tab.link} style={{color:"#A6D230",fontSize:"20px"}}>{tab.text}</Link>
			      )}
        </NavBox>
    
)
export default LinkRoute

