import React from 'react'

import { ReactComponent as MobilePerson } from '../../assets/mobile-person.svg'

// Components
import {
  Container,
  Wrapper,
  WrapperInfo,
  WrapperImage,
  Title,
  Subtitle,
  TitleAbove,
  Button,
} from './style'

const About = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperInfo>
          <Title color="red">SportsNow!</Title>
          <TitleAbove color="white">Developing for the world!</TitleAbove>
          <Subtitle>
            Nossa equipe é composta por seis membros, nos quais fazem parte da
            turma de Ciência da Computação na disciplina de Interação Homem
            Computador, com o intuíto de desenvolver uma aplicação mobile
            utilizando os métodos do <b>Google Design Sprint.</b>
          </Subtitle>
          <Button>Saber mais</Button>
        </WrapperInfo>
        <WrapperImage>
          <MobilePerson />
        </WrapperImage>
      </Wrapper>
    </Container>
  )
}

export default About
