import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Navigate, Route, Routes, } from 'react-router-dom';
import { Login } from './pages/Login';
import { Songs } from './pages/Songs';
import { Playlists } from './pages/Playlists';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Artists } from './pages/Artists';
import { Genres } from './pages/Genres';
import { SongId } from './pages/Songs/SongId';

export function App() {

  function NotFoundComponent() {
    return <h1 style={{color: "#fff"}}>Not Found</h1>
  }

  function RouteWrapper(Component: any) {
        const token = window.localStorage.getItem("token")
        if (!token) {
          return <Navigate to="/login" replace />
        } else {
          return <Component />
        }
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route element={<RouteWrapper/>}>
            <Route path="/playlists" element={<Playlists/>} />
            <Route path="/songs" element={<Songs/>} />
            <Route path="/songs/:id" element={<SongId/>} />
            <Route path="/artists" element={<Artists/>} />
            <Route path="/genres" element={<Genres/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundComponent/>} />
      </Routes>
      <GlobalStyle />
    </>
  )
}
