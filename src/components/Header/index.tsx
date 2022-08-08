import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { MouseEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoMdStats } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'

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
    const navigate = useNavigate();
    const location = useLocation();
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read"
    function handleClick (e: MouseEvent<HTMLElement>) {
        // localStorage.removeItem('token');
        navigate("/profile");
    }
    
    return (
        <HeaderContainer>
            <span className='logo'>
                <IoMdStats color='#fff'/>
                SpotiPI
            </span>
            {
                location.pathname !== '/login' && 
            <div>
                <NavLink to='/playlists'>Playlists</NavLink>
                <NavLink to='/songs'>Músicas</NavLink>
                <NavLink to='/artists'>Artistas</NavLink>
                <NavLink to='/genres'>Gêneros</NavLink>
            </div>
            }
            { Object.keys(userData).length !== 0 && location.pathname !== '/login' ?
             <span className='icon'><img onClick={handleClick} src={userData.images[0].url}/></span> 
             : <span className='login'>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&show_dialog=true`}>
                    <AiOutlineUser color='#fff'/>
                    <p>Entrar</p>
                </a>
             </span> }
        </HeaderContainer>
    )
}