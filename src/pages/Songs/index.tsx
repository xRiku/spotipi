import { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { Song, SongType } from '../../@types/Song';
import { SongContainer, SongsContainer } from './styles';


export function Songs() {

    const [token, setToken] = useOutletContext<String>()
    
    const [selectedItem, setSelectedItem] = useState("last-month");
    const [songs, setSongs] = useState<SongType>({});
    
    useEffect(() => {
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
            setSongs({'last-month': res1.data.items, 'last-six-months': res2.data.items, 'all-time': res3.data.items})
        }))


        // axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
        // headers: {
        //     Authorization: `Bearer ${token}`
        // },
        // }).then(res => {
        //     console.log(res.data);
        //     setSongs(res.data.items);
        // }).catch(e => {
        //     console.log(`error: ${e}`);
        // })
        // axios.get('https://api.spotify.com/v1/me/top/tracks', {
        // headers: {
        //     Authorization: `Bearer ${token}`
        // },
        // }).then(res => {
        //     // console.log(res.data);
        //     setSongs(res.data.items);
        // }).catch(e => {
        //     console.log(`error: ${e}`);
        // })
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
                <button id='all-time' className={selectedItem === "all-time" ? "selected" : "" } onClick={handleSelectOption}>todos os tempos</button>
            </div>
            <ul>
                {Object.keys(songs).length !== 0 && songs[selectedItem].map((song: Song, index: number) => {
                    // console.log(song)
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
