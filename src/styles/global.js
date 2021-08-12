import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    :root {
      --light-vanilla: #FFFDED;
      --vanilla: #F5F1D0;
      --dark-green: #03501D;
      --light-green: #7BB34C;
      --medium-gray: #A8A8A8;
      --light-gray: #FBFDFF;
      --black: #202020;
      --red: #c53030;
    }

    body {
        background: var(--logo-green);
        color: var(--vanilla);
    }

    body, input, button {
        font-family: 'Bree Serif', serif;
        font-size: 1rem;
        background-color: var(--logo-green)
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Indie Flower', cursive;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`