import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import InfoEvakor from "./Pages/InfoEvakor";
import GalleryEvakor from "./Pages/GalleryEvakor";
import Marks from "./Pages/Marks";
import Contact from "./Pages/Contact";
import Delivery from "./Pages/Delivery";
import Return from "./Pages/Return";
import Marks2 from "./Pages/Marks2";
import Stock from "./Pages/Stock";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infoevakor" element={<InfoEvakor />} />
            <Route path="/galleryevakor" element={<GalleryEvakor />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/return" element={<Return />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/marks2/:id" element={<Marks2 />} />
            <Route path="/Stock" element={<Stock />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
