import axios from "axios"
import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Features } from '../../@types/Song'
import { SongIdContainer } from "./styles";
import { IoMdArrowBack } from "react-icons/io";
import "./radar.css"

// const captions = {
//     // columns
//     battery: 'Battery Capacity',
//     design: 'Design',
//     useful: 'Usefulness',
//     speed: 'Speed',
//     weight: 'Weight'
//   };

const captions = {
    acousticness: 'Acousticness',
    danceability: 'Danceability',
    energy: 'Energy',
    instrumentalness: 'Instrumentalness',
    liveness: 'Liveness',
    speechiness: 'Speechiness',
    valence: 'Valence'
}


export function SongId () {

    const { id } = useParams<{id: string}>()
    const [token, setToken] = useOutletContext<String>()
    const [features, setFeatures] = useState<Features | undefined>(undefined)

    useEffect((): void => {
        const storageToken = localStorage.getItem("token")
        axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
                headers: {
                    Authorization: `Bearer ${storageToken || token}`
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