import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/Details';
import AboutUs from './pages/AboutUsPage';
import Navbar from './containers/Navbar';

function App() {
  return (
  <>
    <Navbar />
    <>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/aboutus' element={<AboutUs/>} />
      <Route exact path='/home' element={<HomePage/>} />
      <Route exact path='/:id' element={<UserPage/>} />
    </Routes>
    </>
  </>

  );
}

export default App;
