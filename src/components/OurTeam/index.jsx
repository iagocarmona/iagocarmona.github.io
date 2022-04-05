import React from 'react'

import IagoAvatar from '../../assets/users/iago.jpeg'
import CaioAvatar from '../../assets/users/caio.jpeg'
import MatheusAvatar from '../../assets/users/matheus.jpeg'
import GabrielAvatar from '../../assets/users/gabriel.jpeg'
import ThiagoAvatar from '../../assets/users/thiago.jpeg'
import MarcosAvatar from '../../assets/users/marcos.jpeg'

import {
  Container,
  Title,
  Wrapper,
  CircleBackground,
  WrapperMember,
  NameTitle,
  FunctionSubtitle,
  Avatar,
} from './style'

const team = [
  {
    name: 'Iago Carmona',
    function: 'Developer',
    avatar: IagoAvatar,
  },
  {
    name: 'Caio Barreto',
    function: 'Developer',
    avatar: CaioAvatar,
  },
  {
    name: 'Matheus Fernandes',
    function: 'Developer',
    avatar: MatheusAvatar,
  },
  {
    name: 'Marcos Quadros',
    function: 'Developer',
    avatar: MarcosAvatar,
  },
  {
    name: 'Thiago Gariani',
    function: 'Developer',
    avatar: ThiagoAvatar,
  },
  {
    name: 'Gabriel Vieira',
    function: 'Developer',
    avatar: GabrielAvatar,
  },
]

const OurTeam = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <Wrapper>
        {team.map((item, index) => (
          <WrapperMember key={index}>
            <CircleBackground>
              <Avatar src={item.avatar} />
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
