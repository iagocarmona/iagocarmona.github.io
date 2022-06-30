import React, { forwardRef } from 'react'

import { Container } from './style'

import video from '../../assets/IHC.mp4'

const VideoSection = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <video controls>
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  )
})

export default VideoSection
