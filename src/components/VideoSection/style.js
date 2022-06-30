import styled from 'styled-components'

export const Container = styled.div`
  background-color: #252424;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

export const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.nude};
  margin-bottom: 16px;
`

export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  video {
    width: 70%;
  }
`
