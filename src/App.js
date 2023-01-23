import React from 'react';
import { Route, Routes } from 'react-router';
import Navs from './components/Navs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Show from './pages/Show';
import Starred from './pages/Starred';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/starred" exact element={<Starred />} />
        <Route path="/show/:id" exact element={<Show />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
