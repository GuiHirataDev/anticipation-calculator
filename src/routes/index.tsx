import { MainContent } from "../pages/MainContent";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { HistoryPage } from "../pages/History";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="calculator" element={<MainContent />} />
    <Route path="history" element={<HistoryPage />} />
  </Routes>
);
