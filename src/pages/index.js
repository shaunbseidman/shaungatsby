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
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

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
          }}>Get in touch</div>
            <Modal onClose={this.showForm} show={this.state.show}>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <h4>I'll get back to you ASAP (I mean it)</h4>
              <fieldset>
                <input type="text" name="name" placeholder="Your Name"/>
              </fieldset>
              <fieldset>
                <input type="email" name="email" placeholder="Your Email"/>
              </fieldset>
              <fieldset>
                <input type="email" name="email" placeholder="Your Phone Number (This is HTTPS 😎)"/>
              </fieldset>
              <fieldset>
                <textarea name="message" placeholder="Get In Touch"></textarea>
              </fieldset>
            <button className="closeForm"><h5>Send</h5></button>
            <input type="hidden" name="form-name" value="contact" />
            </form>
            </Modal>
          <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="rgb(33, 44, 79)">
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
