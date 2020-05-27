import React from "react"
import { Link } from "gatsby"
import Card from '../components/card';
import data from '../../data.json'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section";
import Skills from "../components/skills";
import projects from '../../projects.json'
import TextLoop from "react-text-loop";

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
          <p>
            I am {" "}
            <TextLoop>
              <span className="loopedText">a front end developer</span>
              <span className="loopedText">a builder</span>
              <span className="loopedText">a learner</span>
              <span className="loopedText">a reader</span>
              <span className="loopedText">a dog person</span>
              <span className="loopedText">a coffee drinker</span>
              <span className="loopedText">attempting to vacuum more</span>
            </TextLoop>
          </p>
          <Link className="HeroLink" to="/resume">Let's Chat!</Link>
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
          modalHeader={project.modalHeader}
          modalStack={project.modalStack}
          modalText={project.modalText}
          modalImage={project.modalImage}
          />
        ))}
          </div>
        </div>
        <div id="about">
        <Section
          image={require('../images/back1.png')}
          logo={require('../images/me.jpeg')}
          title="About me:"
          text="Thanks for taking a look. I am a front end developer with a passion for creating intuitive user interfaces and problem solving. I believe in the marriage of design and business logic to achieve an exceptional user-facing product."
        />
        </div>
        <SectionCaption>My Skillset:</SectionCaption>
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
