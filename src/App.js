import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registar from "./pages/Registar";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [raffles, setRaffles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${API}/api/raffles`);
      const { data, error: errMessage } = await response.json();
      if (response.ok) {
        setRaffles(data);
      } else {
        throw new Error(errMessage);
      }
    } catch (err) {
      setError(err.Message);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchData();
  },
  []);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {loading ? "loading..." : <Route path="/" element={<Home raffles={raffles}/>} />}
          <Route path="/registar/:id" element={<Registar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
