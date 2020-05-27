import React from "react"
import { Link } from "gatsby"
import Card from '../components/card';
import data from '../../data.json'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section";
import Skills from "../components/skills";
import projects from '../../projects.json'

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
          </path>
        </svg>
        </div>
      </div> 
      <div className="Cards" id="work">
        <h2>Projects</h2>
          <div className="CardGroup">
          {projects.projects.map(project => (
          <Card 
          title={project.title}
          image={project.image}
          buttonText={project.buttonText}
          modalText={project.modalText}
          modalImage={project.modalImage}
          />
        ))}
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
