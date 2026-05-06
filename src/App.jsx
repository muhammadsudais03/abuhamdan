import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Packages from "./pages/Packages.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
