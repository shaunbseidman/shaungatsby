import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumeContainer = styled.div`
    text-align: center;
    margin-top: 2rem;
`

const ResumeContent = styled.img`
    width: 67%;
    height: 78%;

    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`

const BackArrow = styled.img`
    width: 3rem;
    height: 3rem;
    fill: white;
    margin: 2rem 2rem;
`

const Resume = () => (
    <div>
        <Link to="#home">
            <BackArrow src={require('../images/back.png')}></BackArrow>
        </Link>
        <ResumeContainer className="resume"><ResumeContent src={require('../images/ShaunSeidman.png')}/></ResumeContainer>
    </div>
)

export default Resume
