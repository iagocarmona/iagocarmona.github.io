import React from 'react'

// Components
import About from '../../components/About'
import OurTeam from '../../components/OurTeam'

// Styles
import { Wrapper } from './style'

function LandingPage() {
  return (
    <Wrapper>
      <About />
      <OurTeam />
    </Wrapper>
  )
}

export default LandingPage
