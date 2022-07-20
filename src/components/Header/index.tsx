import { Link } from 'react-router-dom'

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
        <header>
            <span>SpotiPI</span>
            <div>
                <Link to='/welcome'>Playlists</Link>
                <Link to='/songs'>Músicas</Link>
                <Link to='/artists'>Artistas</Link>
            </div>
            { Object.keys(userData).length !== 0 ? <img src={userData.images[0].url}/> : <></> }
        </header>
    )
}