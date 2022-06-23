import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  width: 100vw;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`

export const LogoImg = styled.img`
  height: 80%;
  margin-left: 5%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const TeamName = styled.div`
  font-size: 4rem;
  margin-left: 24px;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.darkBrown};
`

export const MenuOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-right: 10%;
  gap: 5%;
  color: ${({ theme }) => theme.colors.darkBrown};
  font-size: 2rem;
`

export const MenuItem = styled.div`
  font-size: 1.3rem;
  color: black;
  height: 2rem;

  :hover {
    border-bottom: solid 5px ${({ theme }) => theme.colors.green};
    border-radius: 2px;
  }
`
