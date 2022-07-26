import { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { Song } from '../../@types/Song';
import { SongContainer, SongsContainer } from './styles';


export function Songs() {

    const [token, setToken] = useOutletContext<String>()
    
    const [selectedItem, setSelectedItem] = useState("last-month");
    const [songs, setSongs] = useState<Song[]>([]);
    
    useEffect(() => {
        console.log(`TOKEN: ${token}`)
        axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            console.log(res.data);
            setSongs(res.data.items);
        }).catch(e => {
            console.log(`error: ${e}`);
        })
    }, [token])


    function handleSelectOption(e: MouseEvent<HTMLElement>) {
        setSelectedItem(e.currentTarget.id);
    }
    
    return (
        <SongsContainer>
            <h1>Mais tocadas</h1>
            <div>
                <button id='last-month' className={selectedItem === "last-month" ? "selected" : "" } onClick={handleSelectOption}>último mês</button>
                <button id='last-six-months' className={selectedItem === "last-six-months" ? "selected" : "" } onClick={handleSelectOption}>últimos 6 meses</button>
                <button id='since-ever' className={selectedItem === "since-ever" ? "selected" : "" } onClick={handleSelectOption}>todos os tempos</button>
            </div>
            <ul>
                {songs.map((song, index) => {
                    return <SongContainer key={song.id}>
                        <h3>{index+1}</h3>
                        <img src={song.album.images[0].url} alt={song.name} />
                        <div>
                            <h2>{song.name}</h2>
                            <span>{song.artists[0].name}</span>
                            {/* <span>Nome do album: {song.album.name}</span> */}
                            {/* <span>Popularidade: {song.popularity}</span> */}
                            {song.explicit ? <span>Explicita</span> : <></>}
                        </div>
                    </SongContainer>
                })}
            </ul>
        </SongsContainer>
    )
}
