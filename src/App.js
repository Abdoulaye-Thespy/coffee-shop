import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/Details';
import AboutUs from './pages/AboutUsPage';
import Navbar from './containers/Navbar';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";

function App({user, signOut}) {
  return (
  <>
    <Navbar user={user} signOut={signOut} />
    <>
      <Routes>
      <Route exact path='/' element={<AboutUs/>} />
      <Route exact path='/aboutus' element={<AboutUs/>} />
      <Route exact path='/home' element={<HomePage/>} />
      <Route exact path='/:id' element={<UserPage/>} />
    </Routes>
    </>
  </>

  );
}

export default withAuthenticator(App);
// export default App;
