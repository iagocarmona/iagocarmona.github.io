import React, { forwardRef } from 'react'

import { Container, Title, VideoWrapper } from './style'

import video from '../../assets/IHC.mp4'

const VideoSection = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Title>Video Conceito</Title>
      <VideoWrapper>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </VideoWrapper>
    </Container>
  )
})

export default VideoSection
