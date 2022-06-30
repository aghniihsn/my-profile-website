import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Loading from "../components/Loading";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Portofolio = React.lazy(() => import("./Portofolio"));
const Contact = React.lazy(() => import("./Contact"));
const NoMatch = React.lazy(() => import("./NoMatch"));

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
                <About />
                <Portofolio />
                <Contact />
              </React.Suspense>
            }
          />
          <Route path="/*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
