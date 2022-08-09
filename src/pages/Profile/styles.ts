import styled from 'styled-components';


export const ProfileContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 5rem;
        margin-top: 1.5rem;
        h1 {
            font-size: 3rem;
        }
        h2 {
            font-size: 2rem;        
            font-weight: 400;
        }

        h4 {
            font-size: 1rem;
            font-weight: 400;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            /* height: 15rem; */
        }
        img {
            width: 13rem;
            border-radius: 3px;
            margin-right: 1rem;
        }

        &.image-div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            svg {
                width: 2rem;
            }
        }
    }
    button {
        /* border-color: white; */
        padding: 1rem;
        border-radius: 5px;
        /* color: red; */
        color: #fff; 
        border-style: solid;
        font-weight: 700;
        background-color: #000; 
        display: flex;
        align-items: center;
        svg {
            width: 1.4rem;
            /* height: 1.5rem; */
            color: #C25;
        }
        :hover {
            background-color: #242424;
        }
    }
`