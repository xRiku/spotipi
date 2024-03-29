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
        justify-content: center;
    }


    div {
        display: flex; 
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        :hover { 
            filter: brightness(1.2);
            transition-duration: 0.2s;
        }

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

    button {
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        cursor: pointer;
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

export const SongIdContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    svg {
        margin-left: 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        &.song-info {
            width: 100%;
            color: #fff;
            margin-bottom: 3rem;
            margin-top: 2rem;
            padding: 1rem 0rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            
            div {
                h1 {
                    font-size: 2.3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    
                }
                h2{
                    font-size: 1.2rem;
                    font-weight: 400;
                }
                :last-child {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    max-width: 30rem;
                }
            }
            img {
                width: 8rem;
                border-radius: 2px;
                margin-right: 1rem;
            }
        }
        &.arrow-div {
            width: 5.5rem;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }
        &.align-support {
            width: 5.5rem;
        }
 
}
`