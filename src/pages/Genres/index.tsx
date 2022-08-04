import { useEffect, useState } from 'react';
import axios from 'axios';
import { Artist, ArtistType } from '../../@types/Artist';
import { MouseEvent } from 'react';
import { GenreContainer, GenresContainer } from './styles';
import { genreOcurrence, GenreType } from '../../@types/Genre';
import PieChart from "../../components/PieChart";
// import { VictoryPie } from 'victory-pie';
import { VictoryLabel } from 'victory-core';
import { VictoryPie } from 'victory-pie';


export function Genres() {

    const [selectedItem, setSelectedItem] = useState("last-month");
    const [genres, setGenres] = useState<GenreType[]>([]);
    
    useEffect(() => {

        let token = window.localStorage.getItem("token")
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
            console.log(res1, res2)
            if (res1.status === 200) {
                let genres = res1.data.items.map((artist: Artist) => artist.genres).flat()
                console.log(genres)
            }
            setGenres([{
                        type: 'last-month', genres: res1.data.items.map((artist: Artist) => artist.genres).flat()
                    }, {
                        type: 'last-six-months', genres: res2.data.items.map((artist: Artist) => artist.genres).flat()
                    }, {
                        type: 'all-time', genres: res3.data.items.map((artist: Artist) => artist.genres).flat()
                    }])
        }))
    }, [])

    function handleSelectOption(e: MouseEvent<HTMLElement>) {
        setSelectedItem(e.currentTarget.id);
    }

    function dictionaryOfOcurrences(genres: string[]) {
        let dict: genreOcurrence[] = [];
        genres.forEach(genre => {
            if (dict.some(el => el.x === genre)) {
                dict.find(el => el.x === genre)!.y++;
            } else {
                dict.push({
                    x: genre,
                    y: 1
                });
            }
        })
        return dict;
    }
    
    return (
        <GenresContainer>
            <h1>Mais tocados</h1>
            <div>
                <button id='last-month' className={selectedItem === "last-month" ? "selected" : "" } onClick={handleSelectOption}>último mês</button>
                <button id='last-six-months' className={selectedItem === "last-six-months" ? "selected" : "" } onClick={handleSelectOption}>últimos 6 meses</button>
                <button id='all-time' className={selectedItem === "all-time" ? "selected" : "" } onClick={handleSelectOption}>todos os tempos</button>
            </div>
            <div className="chart">
                {genres.length > 0 && <PieChart width={600} data={dictionaryOfOcurrences(genres.find(x => x.type === selectedItem)?.genres!).slice(0,5)} />}
            </div>
        </GenresContainer>
    )
}
