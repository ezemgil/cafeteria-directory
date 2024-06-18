import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Locales from "./pages/Locales";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="locales" element={<Locales />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
