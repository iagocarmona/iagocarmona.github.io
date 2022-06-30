import React, { forwardRef } from 'react'

import {
  Container,
  Title,
  ButtonDownload,
  ButtonContent,
  Wrapper,
} from './style'

// https://www.mediafire.com/file/o3d9cd7344dyqr0/Artefatos.zip/file

import { ReactComponent as DownloadIcon } from '../../assets/download.svg'

const ArtefatosSection = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper>
        <Title>Artefatos do projeto</Title>
        <ButtonDownload>
          <ButtonContent
            href="https://download1327.mediafire.com/bjonwdvvdzdg/o3d9cd7344dyqr0/Artefatos.zip"
            dowmload="artefatos.zip"
            rel="noopener noreferrer"
            target="_blank"
          >
            Baixar Artefatos
            <DownloadIcon />
          </ButtonContent>
        </ButtonDownload>
      </Wrapper>
    </Container>
  )
})

export default ArtefatosSection
