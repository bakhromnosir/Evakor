import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import InfoEvakor from "./Pages/InfoEvakor";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<InfoEvakor />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
