import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'


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

    return (
        <HeaderContainer>
            <span>SpotiPI</span>
            <div>
                <NavLink to='/playlists'>Playlists</NavLink>
                <NavLink to='/songs'>Músicas</NavLink>
                <NavLink to='/artists'>Artistas</NavLink>
            </div>
            { Object.keys(userData).length !== 0 ? <img src={userData.images[0].url}/> : <></> }
        </HeaderContainer>
    )
}