import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
