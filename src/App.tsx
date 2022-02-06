import React, { useEffect, useState } from 'react';
import { BrowserRouter as MainRouter, Routes, Route, Navigate} from "react-router-dom";

import { INewUser } from './helpers/interfaces';

import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

import css from  "./App.module.scss";

const App: React.FC = () => {
  const [users, setUsers] = useState<INewUser[]>([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('users') || '[]') as INewUser[];
    const auth = JSON.parse(localStorage.getItem('isAuth') || '');

    setIsAuth(auth);
    setUsers(ls);
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(isAuth));
  }, [isAuth])


  const signUpHandler = (user: INewUser) => {
    setUsers([user, ...users]);
    setIsAuth(true);
    window.location.href = '/';
  }

  const signInHandler = (user: INewUser) => {
    try {
      const ls = JSON.parse(localStorage.getItem('users') || '[]') as INewUser[];

      if (!ls.find(u => u.email === user.email && u.password === user.password)) {
        setIsAuth(false);
        throw new SyntaxError("Error: Please check login and password !!!");
      } else {
        setIsAuth(true);
        window.location.href = '/';
      }
    } catch (e) {
        alert((e as Error).message);
    }
  }

  return (
    <div className={css.App}>
      <MainRouter>
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/auth" element={<AuthPage linkName="Log In" link='/login' pageName='Sign Up' handleClick={signUpHandler}/>} /> 
          <Route path="/login" element={<AuthPage linkName="Sign Up" link='/auth' pageName='Log In' handleClick={signInHandler}/>} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainRouter>
    </div>
  );
}

export default App;
