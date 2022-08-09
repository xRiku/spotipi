import axios from "axios"
import { useEffect, useState } from "react"
import { User } from '../../@types/User'
import { ProfileContainer } from "./styles"
import { MdOutlineLogout } from "react-icons/md"
import { TbCrown } from "react-icons/tb"

export function Profile() {

    const [user, setUser] = useState<User | undefined>(undefined)

    function handleLogout() {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    function getFlagEmoji(countryCode: string | undefined) {
        if (countryCode !== undefined) {
            const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt(0));
            return String.fromCodePoint(...codePoints);
        }
    }

    useEffect((): void => {
        const storageToken = localStorage.getItem("token")
        axios.get(`	https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: `Bearer ${storageToken}`
                },
            }).then(res => {
                console.log(res.data)
                const { display_name, id, images, followers, email, product, country } = res.data
                setUser({display_name, id, images, followers, email, product, country})
            })
    }, [])

    return (
        <ProfileContainer>
            <div>
                <div className="image-div">
                    {user?.product === 'premium' && <TbCrown style={{color: "#e4cf37", marginBottom: 10, fontSize: 30}}/>}
                    <img src={user?.images[0].url}></img>
                </div>
                <div>
                    <h1>{user?.display_name}</h1>
                    <h2>{user?.id}</h2>
                    <h2>{user?.email}</h2>
                    <h2>{getFlagEmoji(user?.country)}</h2>
                    <h4>Total de seguidores: {(user?.followers.total)}</h4>
                </div>
            </div>
            <button onClick={handleLogout}>Fazer logout <MdOutlineLogout/></button>
        </ProfileContainer>
        )
}