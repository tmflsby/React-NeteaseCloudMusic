import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouterPage from "./router";
import "normalize.css";
import "./styles/base.scss";

const YYHeaderComp = lazy(() => import("./components/header"))
const YYFooterComp = lazy(() => import("./components/footer"))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <YYHeaderComp/>

      <RouterPage/>

      <YYFooterComp/>
    </Suspense>
  </Router>
)

export default App
