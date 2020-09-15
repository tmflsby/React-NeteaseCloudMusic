import React, { Suspense, lazy } from 'react';
import { HashRouter as Router } from "react-router-dom";
import YYMainComp from "./router";
import "./styles/base.scss";

const YYHeaderComp = lazy(() => import("./components/header"))
const YYFooterComp = lazy(() => import("./components/footer"))
const YYPlayControlBarPage = lazy(() => import("./pages/player/playControlBar"))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <YYHeaderComp/>

      <YYMainComp/>

      <YYFooterComp/>

      <YYPlayControlBarPage/>
    </Suspense>
  </Router>
)

export default App
