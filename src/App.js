/*eslint-disable */
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
);

export default App;
