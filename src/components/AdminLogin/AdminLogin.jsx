import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const allowedAdminEmails = ["zeetem2000@gmail.com"];

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!allowedAdminEmails.includes(user.email)) {
        setError("❌ Unauthorized access. You are not an admin.");
        return;
      }

      if (onLogin) onLogin(); // Trigger admin state change
      navigate("/adminpanel"); // Adjust route name if needed
    } catch (err) {
      console.error("Firebase Login Error:", err.code, err.message);
      setError("❌ Invalid credentials. Please check your email and password.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white dark:bg-dark p-6 rounded shadow-md max-w-md mx-auto mt-20"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
      {error && <p className="text-red-600 dark:text-red-400 mb-4 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 mb-4 rounded bg-white dark:bg-gray-800"
        required
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 mb-4 rounded bg-white dark:bg-gray-800"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-sm text-gray-600 dark:text-gray-300"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button
        type="submit"
        className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700 transition"
      >
        Login
      </button>
    </form>
  );
}
