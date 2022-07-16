import { useEffect, useState } from 'react';
import axios from 'axios';

export function Welcome() {
    
    const [token, setToken] = useState<string | null>("")
    const [playlists, setPlaylits] = useState<any[]>([]);
    
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            console.log(token);
            window.localStorage.setItem("token", token)
        }

        setToken(token)

        if (token) {

            axios.get('https://api.spotify.com/v1/me/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            }).then(res => {
                console.log(res.data);
            })

            axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            }).then(res => {
                console.log(res)
                setPlaylits(res.data.items);
            })
        }
    }, [])
    
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <ul>
                    <li key={playlists.href}>
                        {playlists.map(playlist => {
                            return <div key={playlist.id}>
                                <h2>{playlist.name}</h2>
                                <p>{playlist.description}</p>
                                <p>{playlist.tracks.total} tracks</p>
                            </div>
                        }
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}
