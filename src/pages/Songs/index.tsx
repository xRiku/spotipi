import { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Song, SongType } from '../../@types/Song';
import { SongContainer, SongsContainer } from './styles';


export function Songs() {

    const [selectedItem, setSelectedItem] = useState("last-month");
    const [tracks, setTracks] = useState<SongType[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {

        let token = window.localStorage.getItem("token")
        console.log(`TOKEN: ${token}`)
        axios.all([
            axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }),
            axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=medium_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }),
            axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
        ]).then(axios.spread((res1, res2, res3) => {
            console.log(res1, res2)
            setTracks([{type: 'last-month', songs: res1.data.items}, {type: 'last-six-months', songs: res2.data.items}, {type: 'all-time', songs: res3.data.items}])
        }))

    }, [])


    function handleSelectOption(e: MouseEvent<HTMLElement>) {
        setSelectedItem(e.currentTarget.id);
    }
    
    function handleClick(id: string) {
        navigate(`/songs/${id}`)
    }

    return (
        <SongsContainer>
            <h1>Mais tocadas</h1>
            <div>
                <button id='last-month' className={selectedItem === "last-month" ? "selected" : "" } onClick={handleSelectOption}>último mês</button>
                <button id='last-six-months' className={selectedItem === "last-six-months" ? "selected" : "" } onClick={handleSelectOption}>últimos 6 meses</button>
                <button id='all-time' className={selectedItem === "all-time" ? "selected" : "" } onClick={handleSelectOption}>todos os tempos</button>
            </div>
            <ul>
                {tracks.find(x => x.type === selectedItem)?.songs.map((song: Song, index: number) => {
                    return <SongContainer key={song.id}>
                        <h3>{index+1}</h3>
                        <button onClick={() => handleClick(song.id)}>
                            <div >
                                <img src={song.album.images[0].url} alt={song.name}  />
                                <div>
                                    <h2>{song.name.length > 26 ? song.name.substring(0,22) + ' ...' : song.name}</h2>
                                    <span>{song.artists[0].name}</span>
                                </div>
                            </div>
                        </button>
                    </SongContainer>
                })}
           
            </ul>
        </SongsContainer>
    )
}
