import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';
import { Artist, ArtistType } from '../../@types/Artist';
import { MouseEvent } from 'react';
import { ArtistContainer, ArtistsContainer } from './styles';

export function Artists() {
    const [token, setToken] = useOutletContext<String>()

    const [selectedItem, setSelectedItem] = useState("last-month");
    const [artists, setArtists] = useState<ArtistType[]>([]);
    
    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        axios.all([
            axios.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }),
            axios.get('https://api.spotify.com/v1/me/top/artists?time_range=medium_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }),
            axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
        ]).then(axios.spread((res1, res2, res3) => {
            setArtists([{type: 'last-month', artists: res1.data.items}, {type: 'last-six-months', artists: res2.data.items}, {type: 'all-time', artists: res3.data.items}])
        }))
    }, [token])

    function handleSelectOption(e: MouseEvent<HTMLElement>) {
        setSelectedItem(e.currentTarget.id);
    }

    return (
        <ArtistsContainer>
            <h1>Mais tocados</h1>
            <div>
                <button id='last-month' className={selectedItem === "last-month" ? "selected" : "" } onClick={handleSelectOption}>último mês</button>
                <button id='last-six-months' className={selectedItem === "last-six-months" ? "selected" : "" } onClick={handleSelectOption}>últimos 6 meses</button>
                <button id='all-time' className={selectedItem === "all-time" ? "selected" : "" } onClick={handleSelectOption}>todos os tempos</button>
            </div>
            <div>
                <ul>
                    {artists.find(x => x.type === selectedItem)?.artists.map((artist: Artist, index: number) => {
                        return <ArtistContainer key={artist.id}>
                            <h3>{index+1}</h3>
                            <a href={artist.external_urls.spotify}>
                                <div>
                                    <img src={artist.images[0].url} alt={artist.name} />
                                    <div>
                                        <h2>{artist.name.length > 26 ? artist.name.substring(0,22) + ' ...' : artist.name}</h2>
                                        <span>{artist.genres[0]}</span>
                                    </div>
                                </div>
                            </a>
                        </ArtistContainer>
                    })}
                </ul>
            </div>
        </ArtistsContainer>
    )
}
