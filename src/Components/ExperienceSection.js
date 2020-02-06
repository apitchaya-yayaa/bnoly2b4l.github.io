import React, { Component } from 'react'
import styled from 'styled-components'
import Anchor from './Anchor'
import spaceGameImg from '../Images/spacegame.png'
import protectSugarImg from '../Images/protectsugar.png'
import practicumImg from '../Images/practicum.jpg'
import tedXImg from '../Images/tedxKU.jpg'
import wizardJamImg from '../Images/wizardJam.jpg'
import ysetterImg from '../Images/ysetter.jpg'
import metromerceImg from '../Images/metromerce.png'
import rebelImg from '../Images/rebel.png'
import refinitivImg from '../Images/refinitiv.jpg'

import { colors } from '../variable'

const Container = styled.div`
  position: relative;
  padding: 3rem 2rem;
  background: ${colors.black};
`
const Title = styled.h2`
  text-align: center;
  color: ${colors.pink300};
`

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 2rem;
`
const TimelineYear = styled.h4`
  font-weight: 700;
  color: ${colors.pink300};
`

const TimelineImg = styled.img`
  width: 220px;
  height: 220px;
  @media screen and (max-width: 850px) {
    width: 150px;
    height: 150px;
  }
`

const TimelineImgRectangle = styled.img`
  width: 100%;
  height: 220px;
  @media screen and (max-width: 850px) {
    width: 350px;
    height: 150px;
  }
  @media screen and (max-width: 414px) {
    width: 280px;
    height: 120px;
  }
`

const TimelineItem = styled.div`
  text-align: center;
  margin-right: 2.5rem;

  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 850px) {
    margin: 1rem 0;
  }
`

const TimelineSection = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  :last-child {
    margin: 2rem 0 0;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

const ItemTitle = styled.h5`
  color: ${colors.pink300};
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const ItemSubTitle = styled.h5`
  color: ${colors.pink300};
  font-weight: 300;
`

export default class ExperienceSection extends Component {
  render() {
    return (
      <Container>
        <Anchor name="experience" />
        <Title>Experiences</Title>
        <Content>
          <TimelineYear>2016</TimelineYear>
          <TimelineSection>
            <TimelineItem>
              <TimelineImg src={ spaceGameImg } />
              <ItemTitle>Space game</ItemTitle>
              <ItemSubTitle>OOP project</ItemSubTitle>
            </TimelineItem>
            <TimelineItem>
              <TimelineImg src={ protectSugarImg } />
              <ItemTitle>Protect sugar game</ItemTitle>
              <ItemSubTitle>OOP project</ItemSubTitle>
            </TimelineItem>
            <TimelineItem>
              <TimelineImg src={ practicumImg } />
              <ItemTitle>Mini piano</ItemTitle>
              <ItemSubTitle>Practicum project</ItemSubTitle>
            </TimelineItem>
          </TimelineSection>
          <TimelineYear>2017</TimelineYear>
          <TimelineSection>
            <TimelineItem>
              <TimelineImg src={ tedXImg } />
              <ItemTitle>Graphic Designer</ItemTitle>
              <ItemSubTitle>TedxKasetsartU</ItemSubTitle>
            </TimelineItem>
            <TimelineItem>
              <TimelineImgRectangle src={ wizardJamImg } />
              <ItemTitle>Shoot that pizza game (Game graphic)</ItemTitle>
              <ItemSubTitle>Wizard Jam 6</ItemSubTitle>
            </TimelineItem>
          </TimelineSection>
          <TimelineYear>2018</TimelineYear>
          <TimelineSection style={{ justifyContent: "flex-start" }}>
            <TimelineItem>
              <TimelineImg src={ ysetterImg } />
              <ItemTitle>1st runner up</ItemTitle>
              <ItemSubTitle>YSetter Reality Hackathon 2</ItemSubTitle>
            </TimelineItem>
            <TimelineItem>
              <TimelineImg src={ metromerceImg } />
              <ItemTitle>Frontend Developer (Intern)</ItemTitle>
              <ItemSubTitle>Metromerce Co., Ltd.</ItemSubTitle>
            </TimelineItem>
          </TimelineSection>
          <TimelineYear>2019</TimelineYear>
          <TimelineSection>
            <TimelineItem>
              <TimelineImgRectangle src={ rebelImg } />
              <ItemTitle>Rebel Project</ItemTitle>
              <ItemSubTitle>Graduated Project</ItemSubTitle>
            </TimelineItem>
            <TimelineItem>
              <TimelineImg src={ refinitivImg } />
              <ItemTitle>Frontend Developer</ItemTitle>
              <ItemSubTitle>Refinitiv</ItemSubTitle>
            </TimelineItem>
          </TimelineSection>
        </Content>
      </Container>
    );
  }
}