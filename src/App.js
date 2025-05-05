import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/menu";
import Home from "./components/Home";
import Projects from "./components/purevanilla";
import About from "./components/darkcacao";
import Contact from "./components/goldencheese";
import Footer from "./components/hollyberry";
import White from "./components/whitelily.jsx";
import Loader from "./components/Loader.jsx"; // 🆕 import the loader

// 🔁 Custom wrapper for route changes + loading
function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2s loading
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Menu />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pure-vanilla" element={<Projects />} />
          <Route path="/dark-cacao" element={<About />} />
          <Route path="/golden-cheese" element={<Contact />} />
          <Route path="/holly-berry" element={<Footer />} />
          <Route path="/white-lily" element={<White />} />
        </Routes>
      )}
    </>
  );
}

// ✨ Your main app
export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

