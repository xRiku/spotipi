import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Features, Song } from '../../@types/Song'
import { SongIdContainer } from "./styles";
import { IoMdArrowBack } from "react-icons/io";
import "./radar.css"

const captions = {    
    speechiness: 'Speechiness',
    valence: 'Valence',
    danceability: 'Danceability',
    energy: 'Energy',
    liveness: 'Liveness',
    instrumentalness: 'Instrumentalness',
    acousticness: 'Acousticness',
}


export function SongId () {

    const { id } = useParams<{id: string}>()
    const [features, setFeatures] = useState<Features | undefined>(undefined)
    const [name, setName] = useState<string>("")
    const [imgSrc, setImgSrc] = useState<string>("")
    const [track, setTrack] = useState<Song | undefined>(undefined)

    useEffect((): void => {
        const storageToken = localStorage.getItem("token")
        axios.all([
            axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
                    headers: {
                        Authorization: `Bearer ${storageToken}`
                    },
                }),
            axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
                headers: {
                    Authorization: `Bearer ${storageToken}`
                },
            }),
        ]).then(axios.spread((res1, res2) => {
            const { acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence } = res1.data
            setFeatures({acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence})
            const { name } = res2.data
            setTrack(res2.data)
            console.log(res2.data)
            setName(name)
            setImgSrc(res2.data.album.images[0].url)
        }))
    }, [])


    return (
        <SongIdContainer>
            <div className="arrow-div">
                <IoMdArrowBack className="arrow" onClick={() => window.history.back()} style={{color:"#fff", fontSize: 200, cursor: "pointer"}}/>
            </div>
            {track !== undefined && features !== undefined &&
                <div>
                    <div className="song-info">
                        <div className="image-div">
                            <img src={imgSrc}></img>
                        </div>
                        <div>
                            <h1>{track!.name}</h1>
                            <h2>{track!.artists[0].name}</h2>
                            {/* <h3>{track!.artists[0]}</h3> */}
                        </div>
                    </div>
                    <div>
                        <RadarChart
                        captions={captions}
                        data={[{data: features, meta: { color: 'black' }}]}
                        size={400}
                        options={{wrapCaptionAt: 30}}
                        />
                    </div>
                </div>
            }
            <div className="align-support"></div>
        </SongIdContainer>
    )
}