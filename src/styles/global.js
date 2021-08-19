import { motion } from "framer-motion"
import styled, { createGlobalStyle } from "styled-components"

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
    --white: #ffffff;

    --card-title-size: 18px;
    --card-text-size: 13px;
    --card-border-radius: 16px;
    --card-small-text: 8px;
    }

    body {
        background: var(--white);
        color: var(--black);
    }

    body, input, button, select {
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="time"]::-webkit-calendar-picker-indicator {
    
    display: none;
    -webkit-appearance: none;
}
`

export const GlobalContainer = styled(motion.div)`
	border-radius: 1.5rem;
	padding: 1rem;
	background-color: var(--white);
	box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
`
