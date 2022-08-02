import styled from "styled-components";


export const LoginContainer = styled.div`
    h1 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 1rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000;
    padding: 1rem;
    a {
        background-color: #1DB954;
        color: #191414;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 400;
        &.active {
            font-weight: 700;
        }
    }

    button {
        color: #fff;
        :hover {
            text-decoration: underline;
        }
    }
`