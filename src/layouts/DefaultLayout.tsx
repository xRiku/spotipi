import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { User } from '../@types/User';
import { Header } from '../components/Header';

export function DefaultLayout() {
  const [userInfo, setUserInfo] = useState<User>({display_name: 'placeholder', id: 'placeholder', images: [{url: 'placeholder'}]});

  useEffect(() => {
    let token = window.localStorage.getItem("token")

    if (token) {

        axios.get('https://api.spotify.com/v1/me/', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        }).then(res => {
            const { display_name, id, images } = res.data;
            setUserInfo({ display_name, id, images });
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