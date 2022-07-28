import styled from "styled-components";


export const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 0.5rem 2rem;
    width: 100%;
    height: 100%;
    ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }


    div {
        display: flex; 
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        button {
            color: #fff;
            font-weight: 200;
            font-size: 1.5rem;
            &.selected {
                font-weight: 700;
            }
        }
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 3.5rem;
        color: #fff;
        margin-bottom: 3rem;
        align-self: center;
    }
`;


export const SongContainer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 25rem;
    margin-bottom: 1rem;

    h3 {
        font-size: 1.25rem;
        color: #fff;
        margin-right: 1rem;
        font-weight: 400;
        width: 3rem;
        text-align: right;
    }

    div {
        color: #fff;
        margin-bottom: 0;
        background-color: #242425;
        border-radius: 5px;
        height: 4rem;

        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding: 0rem 0.75rem;
        }
            
        img {
            height: 4rem;
            border-radius: 5px 0 0 5px;
        }
    }
    h2 {
        font-size: 1rem;
    }

    span {
        text-align: center;
        font-size: 0.75rem;
    }
`