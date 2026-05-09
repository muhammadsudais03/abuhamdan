// src/admin/AdminLogin.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.jpeg";
import { useAdmin } from "./AdminContext";

export default function AdminLogin() {
  const { login, adminAuth } = useAdmin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ redirect only when auth becomes true
  useEffect(() => {
    if (adminAuth) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [adminAuth, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (!success) {
      setError("Invalid email or password.");
    } else {
      setError("");
    }
  };

  // optional safety (prevents showing login if already logged in)
  if (adminAuth) return null;

  return (
    <div className="min-h-screen bg-sky-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-sky-900/50 border border-cyan-400/15 rounded-2xl p-8 shadow-2xl">

        {/* Hidden anti-autofill fields (important) */}
        <input type="text" name="fake_user" style={{ display: "none" }} />
        <input type="password" name="fake_pass" style={{ display: "none" }} />

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-white font-bold mt-3">ABU HAMDAN</h1>
          <p className="text-cyan-300 text-xs tracking-widest">
            Admin Panel
          </p>
        </div>

        <h2 className="text-white text-xl font-bold">Welcome Back</h2>
        <p className="text-sky-400 text-sm mb-6">
          Sign in to continue
        </p>

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/10 border border-red-400 text-red-400 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          autoComplete="off"
          className="flex flex-col gap-4"
        >

          {/* EMAIL */}
          <input
            type="email"
            name="admin_email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="Email"
            className="bg-sky-950/60 border border-cyan-400/20 px-4 py-3 text-white rounded focus:outline-none focus:border-cyan-400"
          />

          {/* PASSWORD */}
          <input
            type={showPassword ? "text" : "password"}
            name="admin_password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Password"
            className="bg-sky-950/60 border border-cyan-400/20 px-4 py-3 text-white rounded focus:outline-none focus:border-cyan-400"
          />

          {/* SHOW PASSWORD */}
          <label className="text-sky-300 text-sm flex items-center gap-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="accent-cyan-400"
            />
            Show password
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-cyan-400 text-sky-950 py-3 rounded font-semibold hover:bg-cyan-300 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}