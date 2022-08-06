import styled from "styled-components";


export const LoginContainer = styled.div`
    h1 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 1rem;
        font-family: "Open Sans", sans-serif;
        width: 50%;
        text-align: center;
        font-weight: 700;
        margin-top: 5rem;
    }
    span {
        font-size: 2.5rem;
        width: 20rem;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
            width: 3rem;
        }
}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    a {
        background-color: #1DB954;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        padding: 1.2rem 3rem;
        margin-top: 2rem;
        border-radius: 40px;
        text-decoration: none;
        :hover {
            transform: scale(1.1,1.05);
            filter: brightness(1.05);
        }
    }

    button {
        color: #fff;
        :hover {
            text-decoration: underline
        }
    }
`