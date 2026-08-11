"use client";

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://everence.io/api/login.php",
        {
          email,
          password,
        }
      );

      console.log("API Response:", res.data); // debug

      if (res.data.success) {
        localStorage.setItem("admin", "true");

        // redirect
        window.location.href = "/admin/dashboard";
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Check server/API.");
    }

    setLoading(false);
  };

  /* ENTER KEY SUPPORT */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[360px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          className="w-full border p-3 mb-4 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="w-full border p-3 mb-4 rounded-lg"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* BUTTON */}
        <button
          onClick={login}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}