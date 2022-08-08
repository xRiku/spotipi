import { GlobalStyle } from './styles/global';
import { Navigate, Route, Routes, } from 'react-router-dom';
import { Login } from './pages/Login';
import { Songs } from './pages/Songs';
import { Playlists } from './pages/Playlists';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Artists } from './pages/Artists';
import { Genres } from './pages/Genres';
import { SongId } from './pages/Songs/SongId';
import { Outlet } from 'react-router-dom';
import { Profile } from './pages/Profile';

export function App() {

  function NotFoundComponent() {
    return <h1 style={{color: "#fff"}}>Not Found</h1>
  }

  function RouteWrapper() {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (token) {
          return <Outlet />
        } else {
          if (hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1]!
            window.location.hash = ""
            window.localStorage.setItem("token", token)
            return <Outlet />
          } else {
            return <Navigate to="/login" replace />
          }
        }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route element={<RouteWrapper/>}>
            <Route path="/playlists" element={<Playlists/>} />
            <Route path="/songs" element={<Songs/>} />
            <Route path="/songs/:id" element={<SongId/>} />
            <Route path="/artists" element={<Artists/>} />
            <Route path="/genres" element={<Genres/>} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundComponent/>} />
      </Routes>
      <GlobalStyle />
    </>
  )
}
