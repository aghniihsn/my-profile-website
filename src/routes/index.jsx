import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Portofolio from "./Portofolio";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <React.Suspense>
                <Home />
                <About />
                <Portofolio />
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/portofolio"
            element={
              <React.Suspense>
                <Portofolio />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense>
                <Contact />
              </React.Suspense>
            }
          />

          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
