import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};
