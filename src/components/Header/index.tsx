import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
    userData: userInfo,
}

type userInfo = {
    images : Array<Image>,
    display_name : string, 
}

type Image = {
    url : string,
}

export function Header( { userData } : HeaderProps) {
    // console.log(userData);
    const navigate = useNavigate();

    function handleClick (e: MouseEvent<HTMLElement>) {
        localStorage.removeItem('token');
        // window.location.reload();
        navigate("/login");
    }
    
    return (
        <HeaderContainer>
            <span>SpotiPI</span>
            <div>
                <NavLink to='/playlists'>Playlists</NavLink>
                <NavLink to='/songs'>Músicas</NavLink>
                <NavLink to='/artists'>Artistas</NavLink>
            </div>
            { Object.keys(userData).length !== 0 ? <img onClick={handleClick} src={userData.images[0].url}/> : <></> }
        </HeaderContainer>
    )
}