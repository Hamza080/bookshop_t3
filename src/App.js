import React from 'react';
import './App.css';
import BookDetail from './BookDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './booklist';

function App() {
  return (
<div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/list" element={<BookList />} />
        <Route path='/detail' element={<BookDetail/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )}
export default App;
