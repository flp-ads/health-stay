import styled from "styled-components";
import CardImage from '../../assets/card_dark.svg';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;

    width: 280px;
    height: 125px;

    margin: 1rem;

    border: 1px solid var(--vanilla);
    border-radius: 16px;
    box-sizing: border-box;

    overflow: hidden;

    @media (min-width: 768px) {

        width: 400px;

    }
`

export const ImageContainer = styled.div`
    background: url(${CardImage}) no-repeat center, var(--dark-green);
    width: 100px;

`

export const ContentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    
    padding: 8px;
    width: calc(100% - 100px);

    background-color: var(--vanilla);

    font-size: var(--card-text-size);

    header {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;

        button {
            font-size: 20px;
            outline: none;
            background: transparent;
            border: none;
            margin-right: 4px;
        }

        .achieved {
            color: var(--light-green);
        }

        .completed {
            color: var(--light-green);
        }

        .delete {
            color: var(--red);
        }
    }

    h4 {
        color: var(--dark-green);
        font-size: var(--card-title-size);
    }

    p {
        color: var(--light-green);
    }

`

