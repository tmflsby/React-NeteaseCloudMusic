import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterPage from "./router";
import "./styles/base.scss";

const YYHeaderComp = lazy(() => import("./components/header"))
const YYFooterComp = lazy(() => import("./components/footer"))
const YYPlayControlBarPage = lazy(() => import("./pages/player/playControlBar"))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <YYHeaderComp/>

      <RouterPage/>

      <YYFooterComp/>

      <YYPlayControlBarPage/>
    </Suspense>
  </Router>
)

export default App
