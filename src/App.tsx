import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Navigate, Route, Routes,  } from 'react-router-dom';
import { Login } from './pages/Login';
import { Songs } from './pages/Songs';
import { Playlists } from './pages/Playlists';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Artists } from './pages/Artists';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/playlists" element={<Playlists/>} />
          <Route path="/songs" element={<Songs/>} />
          <Route path="/artists" element={<Artists/>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}
