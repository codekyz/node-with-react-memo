import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import Navbar from "./components/pages/NavBar/Navbar";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import Footer from "./components/pages/Footer/Footer";
import MemoPage from "./components/pages/MemoPage/MemoPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/memo" element={<MemoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
