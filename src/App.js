import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <Router
    future={{
      v7_relativeSplatPath: true, // Opt-in to future React Router behavior
    }}
  >
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </Router>
);

export default App;