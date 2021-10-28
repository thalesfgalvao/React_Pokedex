import React from 'react';
import { Routes } from './routes/Routes';
import GlobalStyles from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Routes/>
    </>
  );
}
export default App;