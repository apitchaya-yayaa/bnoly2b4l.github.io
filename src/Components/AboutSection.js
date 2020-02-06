import React, { Component } from 'react'
import styled from 'styled-components'
import Anchor from './Anchor'
import profileImg from '../Images/profile.jpg'
import portfolioImg from '../Images/portfolio.svg'
import facebookImg from '../Images/facebook.svg'
import instagramImg from '../Images/instagram.svg'
import mailImg from '../Images/mail.svg'
import resume from '../resume.pdf'

import { colors } from '../variable'

const Container = styled.div`
  position: relative;
  padding: 3rem 2rem;
  background: ${colors.pink200};
`

const Title = styled.h2`
  text-align: center;
`

const Content = styled.div`
  max-width: 900px;
  margin: auto;
`

const ProfileSection = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`

const Profile = styled.div`
  display: flex;
  margin: 7px 0;
`

const HeadProfile = styled.h4`
  font-weight: 300;
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 130px;
  }
`

const IconImg = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
  transition: 0.3s;
  :hover {
    filter: invert(86%) sepia(100%) saturate(0%) hue-rotate(258deg) brightness(109%) contrast(101%);
  }
`
const ContactSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`

const ContactItem = styled.div`
  display: inline-block;
  width: 100px;
  margin: 0.5rem;
`

export default class AboutSection extends Component {
  render() {
    return (
      <Container>
        <Anchor name="about" />
        <Title>About me</Title>
        <Content>
        <ProfileSection>
            <ProfileImg src={ profileImg } />
            <ProfileInfo>
              <Profile>
                <HeadProfile>Name:</HeadProfile>
                <h4>Apitchaya  Denthaworn</h4>
              </Profile>
              <Profile>
                <HeadProfile>Nickname:</HeadProfile>
                <h4>Yaya</h4>
              </Profile>
              <Profile>
                <HeadProfile>Date of birth:</HeadProfile>
                <h4>27 Feb 1997</h4>
              </Profile>
              <Profile>
                <HeadProfile>Education:</HeadProfile>
                <div>
                    <h4>Computer Engineering</h4>
                    <h4>Kasetsart University</h4>
                </div>
              </Profile>
            </ProfileInfo>
          </ProfileSection>
          <ContactSection>
            <ContactItem>
              <a href={ resume } target="_blank" rel="noopener noreferrer"><IconImg src={ portfolioImg } /></a>
              <h6>Resume</h6>
            </ContactItem>
            <ContactItem>
              <a href="mailto:apitchaya.yaya@gmail.com?Subject=Hey%20I%20found%20you%20on%20Github!" target="_blank" rel="noopener noreferrer"><IconImg src={ mailImg } /></a>
              <h6>E-mail</h6>
            </ContactItem>
            <ContactItem>
              <a href="https://www.facebook.com/apichaya.denthaworn" target="_blank" rel="noopener noreferrer"><IconImg src={ facebookImg } /></a>
              <h6>Facebook</h6>
            </ContactItem>
            <ContactItem>
              <a href="https://www.instagram.com/yaya_aa" target="_blank" rel="noopener noreferrer"><IconImg src={ instagramImg } /></a>
              <h6>Instagram</h6>
            </ContactItem>
          </ContactSection>
        </Content>
      </Container>
    );
  }
}