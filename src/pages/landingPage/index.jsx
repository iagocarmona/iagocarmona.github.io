import React from 'react'

// Components
import About from '../../components/About'
import OurTeam from '../../components/OurTeam'
import Footer from '../../components/Footer'

// Styles
import { Wrapper } from './style'

function LandingPage() {
  return (
    <Wrapper>
      <About />
      <OurTeam />
      <Footer />
    </Wrapper>
  )
}

export default LandingPage
