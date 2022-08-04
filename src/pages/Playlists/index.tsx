import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { Playlist } from '../../@types/Playlist';
import { PlaylistContainer, PlaylistsContainer } from './styles';

export function Playlists() {
    
    const [playlists, setPlaylits] = useState<Playlist[]>([]);

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            console.log(res.data);
            setPlaylits(res.data.items);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }, [])
    
    return (
        <PlaylistsContainer>
            <h1>Bem vindo</h1>
            <div>
                <ul>
                    {playlists.map(playlist => {
                        return <PlaylistContainer key={playlist.id}>
                            <a href={playlist.external_urls.spotify} target="_blank">
                            <div>
                                <img src={playlist.images[0].url} alt={playlist.name} />
                                <div>
                                    <h2>{playlist.name}</h2>
                                    <span>{playlist.tracks.total} músicas </span>
                                </div>
                            </div>
                            </a>
                        </PlaylistContainer>
                    }
                    )}
                </ul>
            </div>
        </PlaylistsContainer>
    )
}
