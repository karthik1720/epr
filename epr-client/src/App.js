import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VersionControl from "./pages/version-control/VersionControl";
import VcForm from "./pages/version-control/form/VcForm";
import VcView from "./pages/version-control/view/Vc";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vc/view" element={<VcView></VcView>}></Route>
        <Route
          path="/"
          element={
            localStorage.getItem("token") ? <Home></Home> : <Login></Login>
          }
        ></Route>
        <Route path="/vc" element={<VersionControl />}></Route>
        <Route path="/vc/form" element={<VcForm></VcForm>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
