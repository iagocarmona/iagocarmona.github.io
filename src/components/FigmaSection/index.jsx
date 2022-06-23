import React, { forwardRef } from 'react'

import Cellphone from '../../assets/cellphone.png'

import {
  Container,
  Title,
  Wrapper,
  CellphoneImg,
  ButtonContent,
  WrapperLeftSide,
} from './style'

const FigmaSection = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper>
        <WrapperLeftSide>
          <Title>Figma do projeto</Title>
          <a
            href="https://www.figma.com/proto/3ii1QvoC1LbAdd669yvVec/IHC?node-id=69%3A52&starting-point-node-id=69%3A52"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ButtonContent>Acessar Figma</ButtonContent>
          </a>
        </WrapperLeftSide>
        <CellphoneImg src={Cellphone} />
      </Wrapper>
    </Container>
  )
})

export default FigmaSection
