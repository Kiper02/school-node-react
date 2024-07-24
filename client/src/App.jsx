import { BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import { useContext, useEffect } from 'react';
import { Context } from './index';
import {observer} from 'mobx-react-lite'
import LoginComponent from './components/Auth/LoginComponent';

function App() {
  const {user} = useContext(Context)
  useEffect(() => {
    if(localStorage.getItem('token')) {
      user.checkAuth()
    }
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
