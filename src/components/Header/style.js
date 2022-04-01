import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.green};
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
`

export const MenuOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-right: 10%;
  gap: 5%;
`

export const MenuItem = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.nude};
  height: 2rem;

  :hover {
    border-bottom: solid 5px ${({ theme }) => theme.colors.darkGreen};
    border-radius: 2px;
  }
`
