import React from 'react'

import Logo from '../../assets/logo.png'

// Styles
import {
  Container,
  Wrapper,
  LogoImg,
  MenuOptions,
  MenuItem,
  TeamName,
} from './style'

const Header = ({ aboutRef, ourteamRef, videoRef, artefatoRef, figmaRef }) => {
  const options = [
    {
      title: 'Sobre nós',
      ref: aboutRef,
    },
    {
      title: 'Vídeo',
      ref: videoRef,
    },
    {
      title: 'Figma',
      ref: figmaRef,
    },
    {
      title: 'Artefatos',
      ref: artefatoRef,
    },
    {
      title: 'Nossa equipe',
      ref: ourteamRef,
    },
  ]

  const handleScrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Container>
      <Wrapper>
        <LogoImg src={Logo} />
        <TeamName>Easy Gym</TeamName>
        <MenuOptions>
          {options.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleScrollToElement(item.ref)}
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuOptions>
      </Wrapper>
    </Container>
  )
}

export default Header
