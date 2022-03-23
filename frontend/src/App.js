import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
