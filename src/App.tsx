import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';

export function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
      <GlobalStyle />
    </>
  )
}
