import React from 'react'
import './card.scss'


const Card = props => (
    <div className="Card">
        <img className="image" src={props.image} />
        <h3 className="header">{props.title}</h3>
        <p className="text">{props.text}</p>
    </div>
)

export default Card