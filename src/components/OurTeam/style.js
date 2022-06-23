import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 700px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.nude};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`
export const Avatar = styled.img``

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.green};
`

export const Wrapper = styled.div`
  /* width: 80%; */
  height: fit-content;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1260px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
  background-color: ${({ theme }) => theme.colors.green};
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
  color: ${({ theme }) => theme.colors.darkBrown};
`

export const FunctionSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: lighter;
  opacity: 0.6;
`
