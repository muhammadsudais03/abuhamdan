import { createContext, useContext, useState, useMemo } from "react";

const AdminContext = createContext();

/* =========================
   INITIAL DATA
========================= */

const initialBookings = [
  {
    id: "BK001",
    name: "Fatima Noor",
    service: "Umrah Package",
    type: "Package",
    status: "Confirmed",
    date: "2026-05-06",
    phone: "+92 300 1111111",
    email: "fatima@gmail.com",
    amount: "PKR 180,000",
  },
];

const initialVisas = [
  {
    id: "VS001",
    name: "Bilal Chaudhry",
    country: "United Kingdom",
    type: "Tourist",
    status: "Pending",
    date: "2026-05-05",
    phone: "+92 300 2222222",
    email: "bilal@gmail.com",
    passport: "AB1234567",
  },
];

const initialPackages = [
  {
    id: "PK001",
    title: "Economy Umrah Package",
    category: "Umrah",
    price: "PKR 180,000",
    duration: "10 Days",
    status: "Active",
    bookings: 24,
  },
];

const initialFlights = [
  {
    id: "FL001",
    from: "Islamabad",
    to: "Dubai",
    airline: "Emirates",
    price: "PKR 55,000",
    type: "International",
    status: "Active",
    bookings: 18,
  },
];

const initialMessages = [
  {
    id: 1,
    name: "Ali",
    subject: "Booking inquiry",
    message: "Need details about Umrah package",
    email: "ali@gmail.com",
    phone: "+923001111111",
    date: "2026-05-08",
    read: false,
  },
];

const initialTeam = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Travel Consultant",
    email: "ahmed@abuhamdan.com",
    phone: "+92 300 1234567",
    status: "Active",
    image: "",
  },
];

/* =========================
   PROVIDER
========================= */

export function AdminProvider({ children }) {
  const [bookings, setBookings] = useState(initialBookings);
  const [visas, setVisas] = useState(initialVisas);
  const [packages, setPackages] = useState(initialPackages);
  const [flights, setFlights] = useState(initialFlights);
  const [messages, setMessages] = useState(initialMessages);
  const [team, setTeam] = useState(initialTeam);

  const [adminAuth, setAdminAuth] = useState(
    localStorage.getItem("adminAuth") === "true"
  );

  /* =========================
     AUTH
  ========================= */

  const login = (email, password) => {
    if (email === "admin@abuhamdan.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      setAdminAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    setAdminAuth(false);
  };

  /* =========================
     BOOKINGS
  ========================= */

  const updateBookingStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const addBooking = (booking) => {
    const id = "BK" + String(bookings.length + 1).padStart(3, "0");
    setBookings((prev) => [{ ...booking, id }, ...prev]);
  };

  /* =========================
     VISAS
  ========================= */

  const updateVisaStatus = (id, status) => {
    setVisas((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status } : v))
    );
  };

  const deleteVisa = (id) => {
    setVisas((prev) => prev.filter((v) => v.id !== id));
  };

  const addVisa = (visa) => {
    const id = "VS" + String(visas.length + 1).padStart(3, "0");
    setVisas((prev) => [{ ...visa, id }, ...prev]);
  };

  /* =========================
     PACKAGES
  ========================= */

  const addPackage = (pkg) => {
    const id = "PK" + String(packages.length + 1).padStart(3, "0");
    setPackages((prev) => [{ ...pkg, id, bookings: 0 }, ...prev]);
  };

  const updatePackage = (id, updated) => {
    setPackages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deletePackage = (id) => {
    setPackages((prev) => prev.filter((p) => p.id !== id));
  };

  /* =========================
     FLIGHTS
  ========================= */

  const addFlight = (flight) => {
    const id = "FL" + String(flights.length + 1).padStart(3, "0");
    setFlights((prev) => [{ ...flight, id, bookings: 0 }, ...prev]);
  };

  const updateFlightStatus = (id, status) => {
    setFlights((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status } : f))
    );
  };

  const deleteFlight = (id) => {
    setFlights((prev) => prev.filter((f) => f.id !== id));
  };

  /* =========================
     MESSAGES
  ========================= */

  const markMessageRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
  };

  const markAllRead = () => {
    setMessages((prev) =>
      prev.map((m) => ({ ...m, read: true }))
    );
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  /* =========================
     TEAM
  ========================= */

  const addTeamMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now(),
    };
    setTeam((prev) => [newMember, ...prev]);
  };

  const updateTeamMember = (id, updated) => {
    setTeam((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updated } : m))
    );
  };

  const deleteTeamMember = (id) => {
    setTeam((prev) => prev.filter((m) => m.id !== id));
  };

  /* =========================
     STATS
  ========================= */

  const stats = useMemo(
    () => ({
      totalBookings: bookings.length,
      confirmedBookings: bookings.filter(
        (b) => b.status === "Confirmed"
      ).length,

      totalVisas: visas.length,
      pendingVisas: visas.filter(
        (v) => v.status === "Pending"
      ).length,

      totalPackages: packages.length,
      totalFlights: flights.length,

      totalMessages: messages.length,
      unreadMessages: messages.filter(
        (m) => !m.read
      ).length,

      totalTeam: team.length,
    }),
    [bookings, visas, packages, flights, messages, team]
  );

  return (
    <AdminContext.Provider
      value={{
        adminAuth,
        login,
        logout,

        bookings,
        visas,
        packages,
        flights,
        messages,
        team,
        stats,

        updateBookingStatus,
        deleteBooking,
        addBooking,

        updateVisaStatus,
        deleteVisa,
        addVisa,

        addPackage,
        updatePackage,
        deletePackage,

        addFlight,
        updateFlightStatus,
        deleteFlight,

        markMessageRead,
        markAllRead,
        deleteMessage,

        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

/* =========================
   CUSTOM HOOK
========================= */

export function useAdmin() {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error(
      "useAdmin must be used inside AdminProvider"
    );
  }

  return context;
}