import React, { forwardRef } from 'react'

import { ReactComponent as MobilePerson } from '../../assets/about.svg'

// Components
import {
  Wrapper,
  WrapperInfo,
  WrapperImage,
  Title,
  Subtitle,
  TitleAbove,
  Button,
} from './style'

const About = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <WrapperInfo>
        <Title color="red">Easy Gym</Title>
        <TitleAbove color="white">Developing for the world!!</TitleAbove>
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
  )
})

export default About
