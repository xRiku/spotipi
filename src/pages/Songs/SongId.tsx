import axios from "axios"
import { useEffect } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export function SongId () {

    const { id } = useParams<{id: string}>()
    const [token, setToken] = useOutletContext<String>()

    useEffect((): void => {
        axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }).then(res => {
                console.log(res.data)
            })
    }, [])


    return (
        <h1>{id}</h1>
    )
}