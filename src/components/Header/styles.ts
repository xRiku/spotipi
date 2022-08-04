import styled from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    background-color: #000;
    width: 100%;

    img {
        /* height: 4rem; */
        width: 4rem;
        border-radius: 50%;
        /* margin-right: 2rem; */
        /* margin-bottom: 1rem; */
    }

    span {
        font-size: 2.5rem;
        width: 20rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: start;
        &.icon {
            justify-content: flex-end;
            img {
                cursor: pointer;
            }
        }
    }

    div {
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            color: #fff;
            text-decoration: none;
            font-weight: 200;
            &.active { 
                font-weight: 700;
            }
        }
    }


`