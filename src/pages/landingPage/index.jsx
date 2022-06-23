import React, { useRef, useEffect } from 'react'

// Components
import Header from '../../components/Header'
import About from '../../components/About'
import OurTeam from '../../components/OurTeam'
import Footer from '../../components/Footer'
import VideoSection from '../../components/VideoSection'

// Styles
import { Wrapper } from './style'

const LandingPage = () => {
  const aboutRef = useRef(null)
  const ourteamRef = useRef(null)
  const videoRef = useRef(null)

  return (
    <Wrapper>
      <Header aboutRef={aboutRef} ourteamRef={ourteamRef} videoRef={videoRef} />
      <About ref={aboutRef} />
      <VideoSection ref={videoRef} />
      <OurTeam ref={ourteamRef} />
      <Footer />
    </Wrapper>
  )
}

export default LandingPage
