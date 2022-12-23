import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Area from './pages/Area';
import Details from './pages/Details';
import Welcome from './pages/Welcome';
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
      <Route exact path='/' element={<Welcome/>} />
      <Route exact path='/home' element={<Welcome/>} />
      <Route exact path='/menu/:category' element={<Menu/>} />
      <Route exact path='/menu/area/:area' element={<Area/>} />
      <Route exact path='/:id' element={<Details/>} />
    </Routes>
    </>
  </>

  );
}

export default withAuthenticator(App);
