// // src/admin/AdminLogin.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "/logo.jpeg";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Hardcoded for now — replace with real auth later
//     if (email === "admin@abuhamdan.com" && password === "admin123") {
//       localStorage.setItem("adminAuth", "true");
//       navigate("/admin/dashboard");
//     } else {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-sky-950 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-sky-900/50 border border-cyan-400/15 rounded-2xl p-8 shadow-2xl shadow-sky-950/50">

//         {/* Logo */}
//         <div className="flex flex-col items-center gap-3 mb-8">
//           <div className="w-16 h-16 rounded-full overflow-hidden border border-cyan-400/30 bg-white">
//             <img src={logo} alt="Logo" className="w-full h-full object-cover" />
//           </div>
//           <div className="text-center">
//             <h1 className="text-white font-bold text-lg tracking-wide">ABU HAMDAN</h1>
//             <p className="text-cyan-300 text-xs tracking-[4px] uppercase">Admin Panel</p>
//           </div>
//         </div>

//         <h2 className="text-white font-bold text-xl mb-1">Welcome Back</h2>
//         <p className="text-sky-400 text-sm mb-6">Sign in to manage your website</p>

//         {error && (
//           <div className="bg-red-500/10 border border-red-400/30 text-red-400 text-sm px-4 py-3 rounded-lg mb-5">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <div className="flex flex-col gap-1.5">
//             <label className="text-sky-400 text-xs uppercase tracking-widest">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="admin@abuhamdan.com"
//               className="w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-1.5">
//             <label className="text-sky-400 text-xs uppercase tracking-widest">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-cyan-400 text-sky-950 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition mt-2"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-sky-600 text-xs text-center mt-6">
//           Abu Hamdan Aviation — Admin Access Only
//         </p>
//       </div>
//     </div>
//   );
// }


// src/admin/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.jpeg";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@abuhamdan.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-sky-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-sky-900/50 border border-cyan-400/15 rounded-2xl p-8 shadow-2xl shadow-sky-950/50">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-cyan-400/30 bg-white">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h1 className="text-white font-bold text-lg tracking-wide">ABU HAMDAN</h1>
            <p className="text-cyan-300 text-xs tracking-[4px] uppercase">Admin Panel</p>
          </div>
        </div>

        <h2 className="text-white font-bold text-xl mb-1">Welcome Back</h2>
        <p className="text-sky-400 text-sm mb-6">Sign in to manage your website</p>

        {error && (
          <div className="bg-red-500/10 border border-red-400/30 text-red-400 text-sm px-4 py-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sky-400 text-xs uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sky-400 text-xs uppercase tracking-widest">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-sky-950/60 border border-cyan-400/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-sky-600 focus:outline-none focus:border-cyan-400 transition"
              required
            />
          </div>

          {/* Show Password */}
          <div className="flex items-center gap-2 text-sky-300 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="accent-cyan-400"
            />
            <label>Show password</label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-400 text-sky-950 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-sky-600 text-xs text-center mt-6">
          Abu Hamdan Aviation — Admin Access Only
        </p>
      </div>
    </div>
  );
}