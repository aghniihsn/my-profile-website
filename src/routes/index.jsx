import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Loading from "../components/Loading";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Portofolio = React.lazy(() => import("./Portofolio"));
const Contact = React.lazy(() => import("./Contact"));
const NoMatch = React.lazy(() => import("./NoMatch"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <React.Suspense fallback={<Loading />}>
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
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/portofolio"
            element={
              <React.Suspense fallback={<Loading />}>
                <Portofolio />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
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
