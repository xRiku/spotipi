import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import axios from 'axios';
import { Artist, ArtistType } from '../../@types/Artist';
import { MouseEvent } from 'react';
import { GenreContainer, GenresContainer } from './styles';
import { genreOcurrence, GenreType } from '../../@types/Genre';
// import { VictoryPie } from 'victory-pie';
import { VictoryBar } from 'victory-bar'
import { VictoryChart } from 'victory-chart';
import { VictoryLabel } from 'victory-core';
import { VictoryAxis } from 'victory-axis';
import { VictoryPolarAxis } from 'victory-polar-axis';
import { VictoryPie } from 'victory-pie';


export function Genres() {
    const [token, setToken] = useOutletContext<String>()

    const [selectedItem, setSelectedItem] = useState("last-month");
    // const [artists, setArtists] = useState<ArtistType[]>([]);
    const [genres, setGenres] = useState<GenreType[]>([]);
    
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
    }, [token])

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
        // return dict.sort((a, b) => b.y - a.y);
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
            {/* {console.log(dictionaryOfOcurrences(genres[selectedItem].genres))} */}
            {/* {genres && genres[selectedItem] && genres[selectedItem].genres && genres[selectedItem].genres.length > 0 && */}
            {/* <VictoryChart domainPadding={25}>
                <VictoryAxis 
                style={{ axis: { stroke: '#000' },
                axisLabel: { fontSize: 16 },
                ticks: { stroke: '#000' },
                tickLabels: { fontSize: 12, padding: 100, angle:-90, verticalAnchor: 'middle', textAnchor:'start' }
              }}
                // tickLabelComponent={<VictoryLabel angle={-90}/>}
                />
                <VictoryBar
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}

                    style={{data: {width: 25}}}
                    // labelComponent={<VictoryLabel angle={45}/>}
                    // domainPadding={{ x: 100 }}
                    // categories={{
                    // x: [... new Set(genres.find(x => x.type === selectedItem)?.genres)]
                    // }}
                    data={dictionaryOfOcurrences(genres.find(x => x.type === selectedItem)?.genres!).slice(0,5)}
                />
            </VictoryChart> */}
            <VictoryPie
            // colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            padding={{ left: 130, right: 130 }}
            // padAngle={10}
            width={400}
            height={300}
            style={{labels: {
                fontSize: 20, fill: "#fff", 
              },
              parent: {
                overflow: "visible"
              },
            
            //   parent: {
            //     border: "1px solid #ccc",
            //     borderRadius: "5px",
            //     overflow: "hidden"
            //     }
            }}
            labelComponent={<VictoryLabel renderInPortal/>}
            // innerRadius={40}
            // radius={({ datum }) => 20 + datum.y * 20}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
            data={dictionaryOfOcurrences(genres.find(x => x.type === selectedItem)?.genres!).slice(0,5)}
            />
            {/* <VictoryChart polar
            >
            <VictoryPolarAxis dependentAxis
                style={{ axis: { stroke: "none" } }}
            />
            <VictoryPolarAxis/>
            <VictoryBar
                data={dictionaryOfOcurrences(genres.find(x => x.type === selectedItem)?.genres!).slice(0,5)}
                style={{
                data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }
                }}
            />
            </VictoryChart> */}
            </div>
        </GenresContainer>
    )
}
