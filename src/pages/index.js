import React from "react"
import { Link } from "gatsby"
import Card from '../components/card';
import data from '../../data.json'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section";
import Skills from "../components/skills";
import Modal from "../components/modal"


const SectionCaption = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
  margin-top: 2rem;
  background: linear-gradient(104.74deg, #ffffff 0%, #4A548C 100%);  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;

  @media (max-width: 560px) {
    font-size: 3rem;
  }
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  color: white;

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class IndexPage extends React.Component{
  
  render () {
    return (
    <Layout>
      <div className="Hero" id="home">
        <div className="HeroGroup">
          <h1>Hi I'm Shaun</h1>
          <p>Front End Developer</p>
          <p>blah blah blah more text will go here hopefully</p>
          <Link className="HeroLink" to="/video">Let's Chat!</Link>
          <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>
        </div>
      </div> 
      <div className="Cards" id="work">
        <h2>My Work</h2>
          <div className="CardGroup">
            <Card 
            title="Project 1"
            buttonText="View More"
            image={require('../images/Planes10.png')}/>
            <Card 
            title="Project 2"
            buttonText="View More"
            image={require('../images/Planes10.png')} />
            <Card 
            title="Project 3"
            buttonText="View More"
            image={require('../images/Planes10.png')} />
            <Card 
            title="Project 4"
            buttonText="View More"
            image={require('../images/Planes10.png')} />
            <Card 
            title="Project 5"
            buttonText="View More"
            image={require('../images/Planes10.png')} />
          </div>
        </div>
        <div id="about">
        <Section
          image={require('../images/Planes10.png')}
          logo={require('../images/Planes10.png')}
          title="About me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
        />
        </div>
        <SectionCaption>Skills</SectionCaption>
        <SectionCellGroup>
        {data.skills.map(skill => (
          <Skills 
          title={skill.title}
          image={skill.image}
          />
        ))}
        </SectionCellGroup>
    </Layout>
    )
  }
}

export default IndexPage
