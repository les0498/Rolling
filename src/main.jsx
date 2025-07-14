import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ListPage from "@/pages/list/ListPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ListPage />
    </BrowserRouter>
  </StrictMode>,
);
