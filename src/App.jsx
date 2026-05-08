import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Packages from "./pages/Packages.jsx";
import Visa from "./pages/Visa.jsx";
import Flights from "./pages/Flights.jsx";
import Footer from "./components/Footer.jsx";

// ADMIN PAGES
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/AdminLogin";

function App() {
  return (
    <>
      <Routes>

        {/* ───────── PUBLIC ROUTES ───────── */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/packages"
          element={
            <>
              <Navbar />
              <Packages />
              <Footer />
            </>
          }
        />

        <Route
          path="/visa"
          element={
            <>
              <Navbar />
              <Visa />
              <Footer />
            </>
          }
        />

        <Route
          path="/flights"
          element={
            <>
              <Navbar />
              <Flights />
              <Footer />
            </>
          }
        />

        {/* ───────── ADMIN ROUTES ───────── */}

        {/* Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Dashboard */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;