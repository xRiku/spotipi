import axios from "axios"
import { useEffect, useState } from "react"
import { User } from '../../@types/User'
import { ProfileContainer } from "./styles"


export function Profile() {

    const [user, setUser] = useState<User | undefined>(undefined)

    function handleLogout() {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    useEffect((): void => {
        const storageToken = localStorage.getItem("token")
        axios.get(`	https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: `Bearer ${storageToken}`
                },
            }).then(res => {
                console.log(res.data)
                const { display_name, id, images, email } = res.data
                setUser({display_name, id, images, email})
            })
    }, [])

    return (
        <ProfileContainer>
            <div>
                <div className="image-div">
                    <img src={user?.images[0].url}></img>
                </div>
                <div>
                    <h1>{user?.display_name}</h1>
                    <h2>{user?.id}</h2>
                    <h2>{user?.email}</h2>
                </div>
            </div>
            <button onClick={handleLogout}>Fazer logout</button>
        </ProfileContainer>
        )
}