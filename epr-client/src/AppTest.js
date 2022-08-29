import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./App/AppRoutes";
import AppTop from "./App/AppTop";
import AppBottom from "./App/AppBottom";
function App() {
  return (
    <Router>
      <AppTop></AppTop>
      <AppRoutes></AppRoutes>
      <AppBottom></AppBottom>
    </Router>
  );
}

export default App;
