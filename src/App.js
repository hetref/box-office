import React from 'react';
import { Route, Routes } from 'react-router';
import Navs from './components/Navs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/starred" exact element={<Starred />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
