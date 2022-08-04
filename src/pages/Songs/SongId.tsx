import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Features } from '../../@types/Song'
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

    useEffect((): void => {
        const storageToken = localStorage.getItem("token")
        axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
                headers: {
                    Authorization: `Bearer ${storageToken}`
                },
            }).then(res => {
                console.log(res.data)
                const { acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence } = res.data
                setFeatures({acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence})
            }).catch(err => {
                console.log(err);
              })
    }, [])


    return (
        <SongIdContainer>
            <div>
                <IoMdArrowBack className="arrow" onClick={() => window.history.back()} style={{color:"#fff", fontSize: 200, cursor: "pointer"}}/>
            </div>
            <div>
            {
                features !== undefined && 
                <RadarChart
                    captions={captions}
                    data={[{data: features, meta: { color: 'black' }}]}
                    size={600}
                />
                
            }
            </div>
        </SongIdContainer>
    )
}