import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 400px;
`

export const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.darkBrown};
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonDownload = styled.button`
  margin-top: 32px;
  width: 300px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.nude};
  border-radius: 24px;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.darkBrown};
  }
`

export const ButtonContent = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
`
