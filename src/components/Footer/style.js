import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkerGreen};
  color: white;
  font-size: 0.9rem;
  font-weight: lighter;
`
