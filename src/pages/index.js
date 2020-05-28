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
import Modal from "../components/modal"


const SectionCaption = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-top: 2rem;
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
  constructor() {
    super()

    this.state = {
        show: false
    }

}
  showForm = e => {
    this.setState({
      show: !this.state.show
    });
  };
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
          <div className="HeroLink"
          onClick={e => {
             this.showForm(e);
          }}>Let's Chat!</div>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <label>Your Name: <input type="text" name="name" placeholder="Your Name" /></label>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
          <button>Send</button>
  <input type="hidden" name="form-name" value="contact" />

</form>
          <Modal onClose={this.showForm} show={this.state.show}>
          </Modal>
          <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="rgb(33, 44, 79)">
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
          logo={require('../images/me.jpeg')}
          title="About me:"
          text="Thanks for taking a look. I am a front end developer with a passion for creating intuitive user interfaces and problem solving. I believe in the marriage of design and business logic to achieve an exceptional user-facing product."
        />
        </div>
        <SectionCaption>My Skill Set:</SectionCaption>
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
