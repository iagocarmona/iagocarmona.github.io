import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.darkBrown};
`

export const CellphoneImg = styled.img`
  border-radius: 50px;
  height: 600px;
`

export const ButtonContent = styled.button`
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
    background-color: ${({ theme }) => theme.colors.darkBrown};
    color: ${({ theme }) => theme.colors.nude};
  }
`

export const WrapperLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
