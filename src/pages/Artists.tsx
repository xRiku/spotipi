import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';

type Artist = {
    href: string,
    id: string,
    name: string,
    genres: Array<string>,
    images: Array<Image>,
    popularity: number,
    uri: string,
}

type Image = {
    url: string,
}

export function Artists() {
    const [token, setToken] = useOutletContext<String>()

    const [artists, setArtists] = useState<Artist[]>([]);
    
    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            // console.log(res.data);
            setArtists(res.data.items);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }, [token])

    return (
        <>
            <h1>Mais tocados</h1>
            <div>
                <ul>
                    {artists.map(artist => {
                        return <li key={artist.id}>
                            <img src={artist.images[2].url} alt={artist.name} />
                            <div>
                                <h2>{artist.name}</h2>
                                <p>Gênero principal: {artist.genres[0]}</p>
                                <p>Poularidade: {artist.popularity}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
