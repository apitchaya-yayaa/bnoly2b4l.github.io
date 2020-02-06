import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../variable'

import { Icon } from 'antd'

const Container = styled.div`
  padding: 1rem 2rem;
  background: ${colors.black};
  position: fixed;
  width: 100%;
  height: 62px;
  z-index: 9999;
`

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h3`
  color: ${colors.pink300};
`

const MenuContainer = styled.div`
  display: flex;

  @media screen and (max-width: 675px) {
    position: fixed;
    transition: all 0.5s ease;
    right: -220px;
    top: 0;
    height: 100vh;
    width: 220px;
    background-color: ${colors.pink200};
    flex-direction: column;
    box-shadow: 5px 0px 20px 0px #00000042;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(-220px);' : 'translateX(0);'};
  }
`

const Menu = styled.a`
  margin: 0 1.5rem;
  font-size: 1rem;
  color: ${props => (props.active ? 'white' : colors.pink300)};
  :hover {
    color: white;
  }
  :last-child {
    margin-right: 0rem;
  }
  @media screen and (max-width: 675px) {
    margin: 1rem 1.5rem;
    color: ${colors.black};
  }
`

const BurgerMenu = styled(Icon)`
  color: ${colors.pink300};
  display: none;
  font-size: 20px;
  :hover {
    color: white;
  }
  @media screen and (max-width: 675px) {
    display: inline;
  }
`

const CloseButton = styled(Icon)`
  display: none;
  font-size: 20px;
  text-align: right;
  margin: 1rem;
  @media screen and (max-width: 675px) {
    display: inline;
  }
`

export default class Navbar extends Component {
  state = {
    isMenuOpen: false
  }

  onClickOpenMenu = e => {
    // console.log(this.state.isMenuOpen)
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      <Container>
        <Content>
          <Logo>A.</Logo>
          <BurgerMenu onClick={this.onClickOpenMenu} type="menu" />
          <MenuContainer isMenuOpen={this.state.isMenuOpen}>
            <CloseButton type="close" onClick={this.onClickOpenMenu} />
            <Menu href="#home" onClick={this.onClickOpenMenu}>
              Home
            </Menu>
            <Menu href="#about" onClick={this.onClickOpenMenu}>
              About
            </Menu>
            <Menu href="#skills" onClick={this.onClickOpenMenu}>
              Skills
            </Menu>
            <Menu href="#experience" onClick={this.onClickOpenMenu}>
              Experiences
            </Menu>
          </MenuContainer>
        </Content>
      </Container>
    )
  }
}
