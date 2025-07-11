import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import PostPageLayout from '@/layouts/PostPageLayout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import PaperCardList from '@/components/post/PostCardList';
import { postMockData } from '@/pages/PostDetail/mock';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<NotFound />} />
          <Route path='/post' element={<NotFound />} />
          <Route path='/post/:id/message' element={<NotFound />} />
        </Route>
        <Route element={<PostPageLayout />}>
          <Route
            path='/post/:id'
            element={<PaperCardList messages={postMockData.messages} />}
          />
          <Route path='/post/:id/edit' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
