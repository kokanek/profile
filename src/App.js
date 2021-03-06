import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Sketchnotes from './pages/Sketchnotes';
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import './App.css';

function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <div>Hello there</div>
        </Route>
        <Route path="/components/:type/:name">
          <div>Hello</div>
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sketchnotes">
          <Sketchnotes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
