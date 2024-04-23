import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Welcome} />
          <Route exact path="/home" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;