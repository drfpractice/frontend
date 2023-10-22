import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Writing } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/writing' element={<Writing />} />
      </Routes>
    </BrowserRouter>
  )
}

