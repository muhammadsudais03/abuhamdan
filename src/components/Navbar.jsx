import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#060C48] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-400">✈</span>
            <span className="text-xl font-semibold">
              Abu Hamdan Aviation
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to={"/"} className="hover:text-cyan-400 transition">Home</Link>
            <Link to={"flights"} className="hover:text-cyan-400 transition">Flights</Link>
            <Link to={"/visa"} className="hover:text-cyan-400 transition">Visa</Link>
            <Link to={"/packages"} className="hover:text-cyan-400 transition">Packages</Link>
            <Link to={"/about"} className="hover:text-cyan-400 transition">About</Link>
            <Link to={"/contact"} className="hover:text-cyan-400 transition">Contact</Link>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 text-[#060C48] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Book Now
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <Link to={"/"} className="block py-2 hover:text-cyan-400">Home</Link>
          <Link to={"/flights"} className="block py-2 hover:text-cyan-400">Flights</Link>
          <Link to={"/visa"} className="block py-2 hover:text-cyan-400">Visa</Link>
          <Link to={"/packages"} className="block py-2 hover:text-cyan-400">Packages</Link>
          <Link to={"/about"} className="block py-2 hover:text-cyan-400">About</Link>
          <Link to={"/contact"} className="block py-2 hover:text-cyan-400">Contact</Link>

          <button className="w-full mt-3 bg-yellow-400 text-[#060C48] py-2 rounded-lg font-semibold">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}