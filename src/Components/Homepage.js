import React, { Component } from 'react'
import AboutSection from './AboutSection'
import SkillSection from './SkillSection'
import ExperienceSection from './ExperienceSection'
import HeroSection from './HeroSection'
import Footer from './Footer'


export default class Homepage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <Footer />
      </div>
    );
  }
}