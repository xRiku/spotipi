import styled from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    background-color: #000;

    img {
        height: 4rem;
        border-radius: 50%;
        /* margin-right: 2rem; */
        /* margin-bottom: 1rem; */
    }

    span {
        font-size: 2.5rem;
        color: #fff;
        /* margin-left: 2rem; */
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 200;
        &.active { 
            font-weight: 700;
        }
    }
`