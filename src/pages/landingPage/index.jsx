import React, { useRef } from 'react'

// Components
import Header from '../../components/Header'
import About from '../../components/About'
import OurTeam from '../../components/OurTeam'
import Footer from '../../components/Footer'
import VideoSection from '../../components/VideoSection'
import ArtefatosSection from '../../components/ArtefatosSection'
import FigmaSection from '../../components/FigmaSection'

// Styles
import { Wrapper } from './style'

const LandingPage = () => {
  const aboutRef = useRef(null)
  const ourteamRef = useRef(null)
  const videoRef = useRef(null)
  const artefatoRef = useRef(null)
  const figmaRef = useRef(null)

  return (
    <Wrapper>
      <Header
        aboutRef={aboutRef}
        ourteamRef={ourteamRef}
        videoRef={videoRef}
        artefatoRef={artefatoRef}
        figmaRef={figmaRef}
      />
      <About ref={aboutRef} />
      <VideoSection ref={videoRef} />
      <FigmaSection ref={figmaRef} />
      <ArtefatosSection ref={artefatoRef} />
      <OurTeam ref={ourteamRef} />
      <Footer />
    </Wrapper>
  )
}

export default LandingPage
