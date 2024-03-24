import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background:#f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;
}

*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}

html{
    @media (max-width:1080px){
        font-size: 93.75%;

    }

    @media (max-width:780px){
        font-size: 87.5%;
    }
}
body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif ;
    font-weight: 400;
}

h1, h2, h3,h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}




.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 500px;
    background: var(--background);
    padding: 1rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
}



.react-modal-filter-overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;


}

.react-modal-filter {
  width: 100%;
  max-width: 200px;
  background: var(--blue);
  padding: 1rem;
  position: absolute;
  border-radius: 0.24rem;
  z-index: 999; /* Definindo um índice z alto para que o modal fique acima de outros elementos */
  top: 15rem;
  margin-left: -2rem;
  border: 1px solid #999;
}




`;
