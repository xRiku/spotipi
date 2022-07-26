import styled from "styled-components";


export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 0.5rem 2rem;
    background-color: #242425;
    width: 100%;
    /* max-width: 1080px; */
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;


    div {
        display: flex; 
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        button {
            color: #fff;
            font-weight: 200;
            &.selected {
                font-weight: 700;
            }
        }
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 3.5rem;
        color: #fff;
        margin-bottom: 1rem;

    }

    h3 {
        font-size: 1.25rem;
        color: #fff;
        margin-right: 1rem;
        font-weight: 400;
        width: 3rem;
        text-align: right;
    }
`;


export const SongContainer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    max-width: 25rem;

    img {
        height: 4rem; 
    }

    div {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-left: 1rem;
    }

    span {
        text-align: center;
    }
`