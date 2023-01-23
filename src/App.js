import React from 'react';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element="<Home />" />
        <Route path="/starred" exact element="<Starred />" />
        <Route path="*" exact element="<NotFound />" />
      </Routes>
    </div>
  );
}

export default App;
