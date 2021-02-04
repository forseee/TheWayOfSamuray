import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsContainer from './Components/Navbar/Dialogs/DialogConteiner';
import UsersConteiner from './Components/Navbar/Users/UsersConteiner'
import ProfileConteiner from './Components/Profile/ProfileConteiner';
import HeaderConteiner from './Components/Header/HederConteiner'
import Login from './Components/Login/Login'
import News from './Components/Navbar/News/News';



function App(props) {

  return (
    <div className='app-wrapper'>
      <HeaderConteiner />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() =>
            <DialogsContainer />}
        />
        <Route path='/profile/:userId?'
          render={() =>
            <ProfileConteiner />}
        />
        <Route path='/users'
          render={() =>
            <UsersConteiner />}
        />
        <Route path='/login'
          render={() =>
            <Login />}
        />
        <Route path='/news'
          render={() =>
            <News />} />

      </div>
    </div>
  );
}

export default App;