import { useEffect, useState } from "react"
import { IoMdStats } from "react-icons/io";
import { LoginContainer } from "./styles";

export function Login() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "user-top-read"

    const [token, setToken] = useState<string | null>("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1]!
            window.location.hash = ""
            console.log(token);
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <LoginContainer>
            <span>
                <IoMdStats color='#fff'/>
                SpotiPI
            </span>
            {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&show_dialog=true`}>Login
                to Spotify</a>
            : <button onClick={logout}>Logout</button>}
        </LoginContainer>
    );
}