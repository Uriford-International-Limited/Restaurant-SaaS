"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface SignUpErrors {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
}

export default function SignUp() {
  const router = useRouter();
  const [signup, setSignUp] = useState<SignUpData>({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: SignUpErrors = {};
    if (!signup.name.trim()) newErrors.name = "Username is required";
    if (!signup.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signup.email)) newErrors.email = "Email is invalid";
    if (!signup.password.trim()) newErrors.password = "Password is required";
    else if (signup.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/proses_register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signup),
        }
      );

      const data = await response.json();
      if (response.ok) setShowConfirmMessage(true);
      else setErrors({ general: data.message || "Registration failed" });
    } catch (error) {
      console.error(error);
      setErrors({ general: "Network or server error" });
    } finally {
      setLoading(false);
    }
  };

  if (showConfirmMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#2e0d1d] to-gray-800 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 text-center"
        >
          <h2 className="text-2xl font-bold text-green-500 mb-4 font-medium">
            Registration Successful!
          </h2>
          <p className="text-white/80 mb-6 font-medium">
            Please check your email and{" "}
            <span className="text-[#e21b70] italic">confirm your registration</span>.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/login")}
            className="w-full py-3 rounded-xl bg-[#e21b70] text-white font-medium shadow-lg transition duration-300"
          >
            Go to Login
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#2e0d1d] to-gray-800 px-4 mt-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white text-center mb-6 font-medium"
        >
          Create Your Account
        </motion.h2>

        <form className="space-y-4" onSubmit={handleSignUp} noValidate>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e21b70] transition font-medium"
            type="text"
            name="name"
            placeholder="Username"
            value={signup.name}
            onChange={onInputChange}
          />
          {errors.name && <p className="text-red-400 text-sm font-medium">{errors.name}</p>}

          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e21b70] transition font-medium"
            type="email"
            name="email"
            placeholder="Email"
            value={signup.email}
            onChange={onInputChange}
          />
          {errors.email && <p className="text-red-400 text-sm font-medium">{errors.email}</p>}

          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gray-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e21b70] transition font-medium"
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={onInputChange}
          />
          {errors.password && <p className="text-red-400 text-sm font-medium">{errors.password}</p>}

          {errors.general && <p className="text-red-400 text-sm font-medium">{errors.general}</p>}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#e21b70] text-white font-medium shadow-lg hover:opacity-90 transition duration-300"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <motion.p whileHover={{ scale: 1.02 }} className="text-white text-center mt-4 font-medium">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-[#e21b70] cursor-pointer font-medium hover:underline"
          >
            Login
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
