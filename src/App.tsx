import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Songs } from './pages/Songs';
import { Welcome } from './pages/Welcome';
import { DefaultLayout } from './layouts/DefaultLayout';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/songs" element={<Songs/>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  )
}
