import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { Song } from '../@types/Song';

export function Songs() {

    const [token, setToken] = useOutletContext<String>()

    const [songs, setSongs] = useState<Song[]>([]);
    
    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            // console.log(res.data);
            setSongs(res.data.items);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }, [token])
    
    return (
        <>
            <h1>Mais tocadas</h1>
            <div>
                <ul>
                    {songs.map(song => {
                        return <li key={song.id}>
                            <img src={song.album.images[2].url} alt={song.name} />
                            <div>
                                <h2>{song.name}</h2>
                                <span>{song.artists[0].name}</span>
                                <span>Nome do album: {song.album.name}</span>
                                <span>Popularidade: {song.popularity}</span>
                                {song.explicit ? <span>Explicita</span> : <></>}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
