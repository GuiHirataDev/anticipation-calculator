import { MainContent } from "../pages/MainContent";

import { Routes, Route } from "react-router-dom";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="calculator" element={<MainContent />} />
  </Routes>
);
