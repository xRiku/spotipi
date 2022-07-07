import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';

export function App() {

  return (
    <>
      <Routes>
      {/* <Header /> */}
        <Route path="/login" element={<Login/>} />
      {/* <h1>Hello World</h1> */}
      </Routes>
      <GlobalStyle />
    </>
  )
}
