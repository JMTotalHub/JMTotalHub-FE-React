import './App.css';

// App.js
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import Test from './pages/test/Test';
import Board from './pages/board';

// const API_URL = process.env.EXPRESS_API_URL;

const App = () => {
  return (
    <Routes>
      <Route path="/tests/*" element={<Test />} />
      <Route path="/boards/*" element={<Board />} />
    </Routes>
  );
};

export default App;
