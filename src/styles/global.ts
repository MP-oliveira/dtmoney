import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-body: #969CB3;
    --text-title: #363f5f;

    --shape: #FFFFFF;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html{ 
    @media(max-width:1080px){
      font-size: 93.75%;
    }

    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;

  display: flex;
  justify-content: center;
  align-items: center;

}
.react-modal-content{
  width: 100%;
  max-width: 576px;

  border-radius: 0.24rem;
  padding: 3rem;
  position: absolute;

  background: var(--background);

}

.react-modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}
`