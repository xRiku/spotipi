import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

export function Playlists() {
    
    const [token, setToken] = useOutletContext<String>()
    const [playlists, setPlaylits] = useState<any[]>([]);

    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            // console.log(res.data);
            setPlaylits(res.data.items);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }, [token])
    
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <ul>
                    {playlists.map(playlist => {
                        return <li key={playlist.id}>
                            <h2>{playlist.name}</h2>
                            <p>{playlist.description}</p>
                            <p>{playlist.tracks.total} tracks</p>
                        </li>
                    }
                    )}
                </ul>
            </div>
        </>
    )
}
