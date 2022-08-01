import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Navigate, Route, Routes,  } from 'react-router-dom';
import { Login } from './pages/Login';
import { Songs } from './pages/Songs';
import { Playlists } from './pages/Playlists';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Artists } from './pages/Artists';
import { Genres } from './pages/Genres';
import { SongId } from './pages/Songs/SongId';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/playlists" element={<Playlists/>} />
          <Route path="/songs" element={<Songs/>} />
          <Route path="/songs/:id" element={<SongId/>} />
          <Route path="/artists" element={<Artists/>} />
          <Route path="/genres" element={<Genres/>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}
