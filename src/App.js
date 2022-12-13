import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/Details'
import Navbar from './containers/Navbar';

function App() {
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/:id' element={<UserPage/>} />
    </Routes>
    </div>
  </>

  );
}

export default App;
