import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout(props: any) {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        console.log(token);
        window.localStorage.setItem("token", token)
    }

    setToken(token)

    if (token) {

        axios.get('https://api.spotify.com/v1/me/', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(async res => {
            // console.log(res.data);
            await setUserInfo(res.data);
        })
    }
  }, [])


  return (
    <>
      <Header userData={userInfo}/>
      <Outlet />
    </>
  );
}