import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<NotFound />} />
        <Route path='/post' element={<NotFound />} />
        <Route path='/post/:id' element={<NotFound />} />
        <Route path='/post/:id/edit' element={<NotFound />} />
        <Route path='/post/:id/message' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
