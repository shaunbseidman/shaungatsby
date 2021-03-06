import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    min-width: 320px;
`

const CellImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 40px;
`

const CellTitle = styled.div`
    font-size: 1.8rem;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
`

const Skills = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Skills
