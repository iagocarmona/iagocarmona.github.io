import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  padding-top: 32px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.green},
    ${({ theme }) => theme.colors.darkGreen}
  );
`
export const WrapperInfo = styled.div`
  width: 40%;
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WrapperImage = styled.div`
  width: 60%;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  color: white;
  margin: 0;
`

export const TitleAbove = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.nude};
  white-space: nowrap;
  margin: 0;
  margin-bottom: 26px;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: white;
`
export const Button = styled.button`
  margin-top: 24px;
  font-size: 1.2rem;
  width: 120px;
  height: 48px;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkBrown};
  border-radius: 12px;
  border: none;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.nude};
    color: ${({ theme }) => theme.colors.darkBrown};
  }
`