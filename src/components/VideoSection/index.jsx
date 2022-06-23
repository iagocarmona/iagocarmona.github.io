import React, { forwardRef } from 'react'

import { Container } from './style'

const VideoSection = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <video controls>
        <source src="movie.mp4" type="video/mp4" />
      </video>
    </Container>
  )
})

export default VideoSection
