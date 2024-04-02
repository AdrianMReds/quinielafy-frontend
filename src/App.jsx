import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuinielaView from "./pages/QuinielaView";
import SideMenu from "./components/SideMenu";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Router>
        <div className="w-[100vw]">
          <Header />
          <div className="flex">
            {user && <SideMenu />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/quiniela/:id" element={<QuinielaView />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
