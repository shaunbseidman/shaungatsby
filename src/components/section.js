import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url('https://gdurl.com/Jh32');
    background-size: cover;
    height: 611px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    margin: 0 auto;
    align-self: end;
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
     max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    font-weight: 400;
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

const Section = props => (
    <SectionGroup >
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section