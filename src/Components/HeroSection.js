import React, { Component } from 'react'
import Anchor from './Anchor'
import styled, { keyframes } from 'styled-components'
import arrowImg from '../Images/arrow.svg'

import { colors } from '../variable'

const Container = styled.div`
  position: relative;
  padding: 0 2rem;
  background: ${colors.black};
`

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`

const Title = styled.h1`
  color: ${colors.pink300};
`

const SubTitle = styled.h3`
  color: ${colors.pink300};
  margin-top: 1rem;
`

const bounce = keyframes`
  0%   { transform: translateY(0); }
  30%  { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`

const DownIcon = styled.img`
  filter: invert(87%) sepia(24%) saturate(1150%) hue-rotate(295deg) brightness(90%) contrast(94%);
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin-left: -20px;
  animation: ${ bounce } 2s ease infinite;
  transition: 0.3s;
  :hover {
    filter: invert(99%) sepia(0%) saturate(1%) hue-rotate(125deg) brightness(110%) contrast(100%)
  }
`

export default class HeroSection extends Component {
  render() {
    return (
      <Container>
        <Anchor name="home" />
        <Content>
          <Title>Hello, I am Apitchaya</Title>
          <SubTitle>Front-end Developer & Web Designer</SubTitle>
          <a href="#about"><DownIcon src={arrowImg} /></a>
        </Content>
      </Container>
    )
  }
}
