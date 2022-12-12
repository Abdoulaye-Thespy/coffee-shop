import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/Details'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/:id' element={<UserPage/>} />
    </Routes>
  );
}

export default App;
