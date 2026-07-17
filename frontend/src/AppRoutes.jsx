import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeAnalysis from "./pages/ResumeAnalysis";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<ResumeAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;