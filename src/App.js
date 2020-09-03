import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./styles/base.scss";

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Button = lazy(() => import("./components/Button"))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Button/>
    </Suspense>
  </Router>
)

export default App
