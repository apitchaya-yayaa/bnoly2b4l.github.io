import React, { Component } from 'react'
import Anchor from './Anchor'
import styled from 'styled-components'
import programmingImg from '../Images/coding.svg'
import webImg from '../Images/web.svg'
import toolsImg from '../Images/tools.svg'

const Container = styled.div`
  position: relative;
  padding: 3rem 2rem;
`

const Title = styled.h2`
  text-align: center;
`

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 2rem;
`

const SkillInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3rem 0;
`

const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1.2rem;
  filter: invert(86%) sepia(66%) saturate(3229%) hue-rotate(287deg)
    brightness(90%) contrast(94%);
`

const HeadSkill = styled.div`
  display: flex;
  width: 300px;
`

export default class SkillSection extends Component {
  render() {
    return (
      <Container>
        <Anchor name="skills" />
        <Title>Skills</Title>
        <Content>
          <SkillInfo>
            <HeadSkill>
              <IconImg src={programmingImg} />
              <h4>Programming</h4>
            </HeadSkill>
            <h4>Javascript, Python, C#, C, C++</h4>
          </SkillInfo>
          <SkillInfo>
            <HeadSkill>
              <IconImg src={webImg} />
              <h4>Web</h4>
            </HeadSkill>
            <h4>Vue.js, React, Jest, Vuex, GraphQL, HTML, CSS, Firebase</h4>
          </SkillInfo>
          <SkillInfo>
            <HeadSkill>
              <IconImg src={toolsImg} />
              <h4>Tools</h4>
            </HeadSkill>
            <h4>Adobe XD, Figma, Photoshop</h4>
          </SkillInfo>
        </Content>
      </Container>
    )
  }
}
