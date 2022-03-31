import styled from 'styled-components'

// Container,
// CircleBackground,
// NameTitle,
// FunctionSubtitle,

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.darkGreen};
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
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
  background-color: ${({ theme }) => theme.colors.darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 85%;
    height: 85%;
  }
`

export const NameTitle = styled.h3``

export const FunctionSubtitle = styled.p``
