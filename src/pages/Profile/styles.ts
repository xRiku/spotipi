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

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }
        img {
            width: 10rem;
            border-radius: 3px;
            margin-right: 1rem;
        }

    }
    button {
        border-color: red;
        padding: 1rem;
        border-radius: 5px;
        color: red;
        border-style: solid;
        background-color: #f5f5f5; 
        :hover {
            background-color: red;
            color: #fff; 
        }
    }
`