import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import KrishnaChatbot from "./pages/KrishnaChatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<KrishnaChatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
