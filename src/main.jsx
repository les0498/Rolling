import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import PostPageLayout from '@/layouts/PostPageLayout';
import ThemeLayout from '@/layouts/ThemeLayout';
import Home from '@/pages/Home';
import ListPage from '@/pages/List';
import Message from '@/pages/Message';
import NotFound from '@/pages/NotFound';
import PostCreate from '@/pages/PostCreate';
import PostDetail from '@/pages/PostDetail';

import '@/styles/reset.scss';
import '@/styles/theme.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ThemeLayout />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<ListPage />} />
            <Route path='/post' element={<PostCreate />} />
            <Route path='/post/:id/message' element={<Message />} />
          </Route>
          <Route element={<PostPageLayout />}>
            <Route path='/post/:id' element={<PostDetail />} />
            <Route path='/post/:id/edit' element={<NotFound />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
