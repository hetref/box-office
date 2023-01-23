import React from 'react';
import { Route, Routes } from 'react-router';
import Navs from './components/Navs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Starred from './pages/Starred';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/starred" exact element={<Starred />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

export default App;
