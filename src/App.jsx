import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Packages from "./pages/Packages.jsx";
import Visa from "./pages/Visa.jsx";
import Flights from "./pages/Flights.jsx";

/* ADMIN */
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import AdminLogin from "./Admin/AdminLogin.jsx";
import AdminBookings from "./Admin/AdminBookings.jsx";
import AdminFlights from "./Admin/AdminFlights.jsx";
import AdminVisas from "./Admin/AdminVisas.jsx";
import AdminPackages from "./Admin/AdminPackages.jsx";
import AdminMessages from "./Admin/AdminMessages.jsx";
import AdminTeam from "./Admin/AdminTeam.jsx";
import AdminPages from "./Admin/AdminPagesCont.jsx";
import ProtectedRoute from "./Admin/ProtectedRoute.jsx";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const isAdminLoggedIn = localStorage.getItem("adminAuth") === "true";

  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}

      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <PublicLayout>
            <ContactUs />
          </PublicLayout>
        }
      />

      <Route
        path="/about"
        element={
          <PublicLayout>
            <AboutUs />
          </PublicLayout>
        }
      />

      <Route
        path="/packages"
        element={
          <PublicLayout>
            <Packages />
          </PublicLayout>
        }
      />

      <Route
        path="/visa"
        element={
          <PublicLayout>
            <Visa />
          </PublicLayout>
        }
      />

      <Route
        path="/flights"
        element={
          <PublicLayout>
            <Flights />
          </PublicLayout>
        }
      />

      {/* ================= ADMIN ================= */}

      <Route
        path="/admin"
        element={<Navigate to="/admin/login" replace />}
      />

      <Route
        path="/admin/login"
        element={
          isAdminLoggedIn ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <AdminLogin />
          )
        }
      />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="flights" element={<AdminFlights />} />
        <Route path="visas" element={<AdminVisas />} />
        <Route path="packages" element={<AdminPackages />} />
        <Route path="pages" element={<AdminPages />} />
        <Route path="team" element={<AdminTeam />} />
        <Route path="messages" element={<AdminMessages />} />

        <Route
          path="*"
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Route>

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={
          <PublicLayout>
            <div className="min-h-screen bg-sky-950 flex flex-col items-center justify-center text-white gap-4">
              <p className="text-7xl">✈️</p>

              <h1 className="text-5xl font-bold">404</h1>

              <p className="text-sky-400 text-lg">
                Page not found
              </p>

              <a
                href="/"
                className="bg-cyan-400 text-sky-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Go Home
              </a>
            </div>
          </PublicLayout>
        }
      />
    </Routes>
  );
}

export default App;