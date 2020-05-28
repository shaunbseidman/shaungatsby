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
                <div className="Card">
                    <img className="image" src={this.props.image} />
                    <h3 className="header">{this.props.title}</h3>
                    <h3
                        className="toggle-button"
                        id="centered-toggle-button"
                        onClick={e => {
                        this.showModal(e);
                        }}
                    >
                    {this.props.buttonText}
                    </h3>
                </div>
                <Modal onClose={this.showModal} show={this.state.show}>
                    <div className="fart">
                        <h3 className="modalHeader">{this.props.modalHeader}</h3>
                        <div className="modalStackText">{this.props.modalStack}</div>
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