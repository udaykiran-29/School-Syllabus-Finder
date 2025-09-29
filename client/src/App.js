import React from "react";
import { Routes, Route } from "react-router-dom";
import Dropdowns from "./components/Dropdowns";
import SyllabusPage from "./pages/SyllabusPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dropdowns />} />
      <Route path="/syllabus" element={<SyllabusPage />} />
    </Routes>
  );
}

export default App;
