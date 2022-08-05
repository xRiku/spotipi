import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Path } from 'victory-core'
import { IoMdStats } from 'react-icons/io'

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

    function handleClick (e: MouseEvent<HTMLElement>) {
        localStorage.removeItem('token');
        navigate("/login");
    }
    
    return (
        <HeaderContainer>
            <span className='logo'>
                <IoMdStats color='#fff'/>
                SpotiPI
            </span>
            <div>
                <NavLink to='/playlists'>Playlists</NavLink>
                <NavLink to='/songs'>Músicas</NavLink>
                <NavLink to='/artists'>Artistas</NavLink>
                <NavLink to='/genres'>Gêneros</NavLink>
            </div>
            { Object.keys(userData).length !== 0 ? <span className='icon'><img onClick={handleClick} src={userData.images[0].url}/></span> : <></> }
        </HeaderContainer>
    )
}