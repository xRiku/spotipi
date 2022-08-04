import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout(props: any) {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    let token = window.localStorage.getItem("token")

    setToken(token)
    if (token) {

        axios.get('https://api.spotify.com/v1/me/', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            setUserInfo(res.data);
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