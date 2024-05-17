import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './FileStructure/Home';
import Read from './FileStructure/Read';
import Update from './FileStructure/Update';
import Create from './FileStructure/Create';
// import Route from './RouteApp';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}
