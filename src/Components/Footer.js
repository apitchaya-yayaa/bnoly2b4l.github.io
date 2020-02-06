import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { colors } from '../variable'

const Container = styled.div`
  position: relative;
  padding: 0.7rem 2rem;
  background: ${colors.pink300};
  @media screen and (max-width: 500px) {
    padding: 0.7rem 1rem;
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.p`
  color: white;
  font-weight: 500;
  line-height: 1.7rem;
  font-size: 14px;
`
const SubTitle = styled.p`
  color: white;
  font-weight: 500;
  line-height: 1.7rem;
  font-size: 12px;
`

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>made with <Icon type="heart" theme="filled" /> by Apitchaya Denthaworn</Title>
          <SubTitle>Last updated: 19<sup>th</sup> Jan 2020</SubTitle>
        </Content>
      </Container>
    );
  }
}