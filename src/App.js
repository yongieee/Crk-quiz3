import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Menu from "./components/menu";
import Home from "./components/Home";
import Projects from "./components/purevanilla";
import About from "./components/darkcacao";
import Contact from "./components/goldencheese";
import Footer from "./components/hollyberry";
import White from "./components/whitelily.jsx";
import Loader from "./components/Loader.jsx";

// Component that handles all routes and loader logic
function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; // Don't show loader on first load
    }

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Menu />
      {loading && !isFirstLoad.current && <Loader />}

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/pure-vanilla" element={<Projects />} />
        <Route path="/dark-cacao" element={<About />} />
        <Route path="/golden-cheese" element={<Contact />} />
        <Route path="/holly-berry" element={<Footer />} />
        <Route path="/white-lily" element={<White />} />

        {/* Redirects */}
        <Route path="/Crk-Quiz2" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all */}
      </Routes>
    </>
  );
}

// Main App with basename for subfolder hosting
export default function App() {
  return (
    <Router basename="/Crk-quiz3">
      <AppRoutes />
    </Router>
  );
}

