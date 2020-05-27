import { Link } from "gatsby"
import React from "react"
import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

  render() {
    return (
    <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link className="HeaderLinks" to="#home"><img src={require('../images/SSLogo.png')} width="60" /></Link>
        <Link className="HeaderLinks" to="#work">Projects</Link>
        <Link className="HeaderLinks" to="#about">About</Link>
        <Link to="/resume"><button>Resume</button></Link>
      </div>
    </div>
    )
  }
}

export default Header
