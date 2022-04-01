import styled from 'styled-components'

// Container,
// CircleBackground,
// NameTitle,
// FunctionSubtitle,

export const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Avatar = styled.img``

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.darkGreen};
`

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 3rem;
`
export const WrapperMember = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CircleBackground = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lighterGreen};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 87%;
    height: 87%;
    border-radius: 50%;
  }
`

export const NameTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: lighter;
`

export const FunctionSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: lighter;
  opacity: 0.6;
`
