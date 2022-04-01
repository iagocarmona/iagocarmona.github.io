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

const options = [
  {
    title: 'Sobre nós',
  },
  {
    title: 'Vídeos',
  },
  {
    title: 'Nossa equipe',
  },
]

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImg src={Logo} />
        <TeamName>Plus Ultra</TeamName>
        <MenuOptions>
          {options.map((item, index) => (
            <MenuItem key={index}>{item.title}</MenuItem>
          ))}
        </MenuOptions>
      </Wrapper>
    </Container>
  )
}

export default Header
