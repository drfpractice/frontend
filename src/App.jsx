import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main, Stats, Writing, Student } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/writing' element={<Writing />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/student/:id' element={<Student />} />
      </Routes>
    </BrowserRouter>
  )
}

