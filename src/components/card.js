import React from 'react'
import './card.scss'
import Modal from "../components/modal"

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

    }
    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

      render () {
          return (
            <div className="crap">
                <div className="Card"
                    onClick={e => {
                    this.showModal(e);
                }}>
                    <img className="image" src={this.props.image} />
                <div className="headerWrapper">
                    <h3 className="header">{this.props.title}</h3>
                </div>
                </div>
                <Modal onClose={this.showModal} show={this.state.show}>
                    <div className="container">
                        <h3 className="modalHeader">{this.props.modalHeader}</h3>
                        <div className="modalStackText">{this.props.modalStack}</div>
                        <a href={this.props.modalLink} target="_blank" className="modalLink">{this.props.modalLink}</a>
                        <br/>
                        <a href={this.props.modalRepo} target="_blank"className="modalRepo">{this.props.modalRepo}</a>
                        <div className="modalText">{this.props.modalText}</div>
                        <div className="modalImages">
                            <img className="modalImage" src={this.props.modalImage}></img>
                            <img className="modalImage" src={this.props.secondaryImage}></img>
                        </div>
                    </div>
                </Modal>
            </div>
          )
      }
    }

export default Card