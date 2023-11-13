import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <div className="container mx-auto px-5 my-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
