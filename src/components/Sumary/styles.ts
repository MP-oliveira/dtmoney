import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  
  

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    color: var(--text-title);

    &.highlight-background{
      background: var(--green);
      color: #FFF;
    }
  }

  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.5rem
  }
  
`