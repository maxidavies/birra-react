import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <Router>
      <Hero />
    </Router>
  );
}
