import React from 'react';
import './App.css';
import { Routes } from './routes/Routes';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Routes/>
    </>
  );
}
export default App;