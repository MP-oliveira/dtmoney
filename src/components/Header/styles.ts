import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);

`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  border-radius: 0.25rem;
  width: 12.2rem;
  height: 3rem;
  background: var(--blue-light);
  border: none;
  color: #FFF;
  font-size: 1rem;
  padding: 0 2rem;
  cursor: pointer;

  &:hover {
    filter:  brightness(0.9);
  }

`