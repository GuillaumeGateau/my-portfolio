import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </Router>
);

export default App;