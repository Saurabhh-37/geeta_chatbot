import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KrishnaChatbot from "./pages/KrishnaChatbot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KrishnaChatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
