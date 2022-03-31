import React from 'react'

import { ReactComponent as Avatar } from '../../assets/avatar.svg'

import {
  Container,
  Title,
  Wrapper,
  CircleBackground,
  WrapperMember,
  NameTitle,
  FunctionSubtitle,
} from './style'

const team = [
  {
    name: 'Iago Carmona',
    function: 'Developer',
  },
  {
    name: 'Caio Barreto',
    function: 'Developer',
  },
  {
    name: 'Matheus Fernandes',
    function: 'Developer',
  },
  {
    name: 'Marcos Quadros',
    function: 'Developer',
  },
  {
    name: 'Thiago Gariani',
    function: 'Developer',
  },
  {
    name: 'Gabriel Vieira',
    function: 'Developer',
  },
]

const OurTeam = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <Wrapper>
        {team.map((item, index) => (
          <WrapperMember>
            <CircleBackground key={index}>
              <Avatar />
            </CircleBackground>
            <NameTitle>{item.name}</NameTitle>
            <FunctionSubtitle>{item.function}</FunctionSubtitle>
          </WrapperMember>
        ))}
      </Wrapper>
    </Container>
  )
}

export default OurTeam
